import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

import sendMail from '../utils';

dotenv.config({ path: '.env' });

const Mutation = {
  async signup(parent, args, ctx, info) {
    const { username, password, email, phoneNumber, profilePicUrl } = args;
    const hashedPassword = await bcrypt.hash(password, 10);
    const userDetails = {
      username: username.toLowerCase(),
      email: email.toLowerCase(),
      password: hashedPassword,
      phoneNumber,
      profilePicUrl
    };

    const user = await ctx.db.mutation.createUser({ data: userDetails }, info);
    const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET);

    ctx.response.cookie('token', token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 3
    });

    return user;
  },

  async signin(parent, args, ctx, info) {
    const { email, password } = args;
    const user = await ctx.db.query.user({ where: { email: email.toLowerCase() } });

    if (!user) {
      throw new Error(`No user found for this email`);
    }
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      throw new Error('Username and password don\'t match');
    }

    const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET);

    ctx.response.cookie('token', token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 3
    })
    
    return user;
  },

  async requestResetPasswordLink(parent, args, ctx, info) {
    const { recipientEmail } = args;
    const user = await ctx.db.query.user({ where: { email: recipientEmail }});
    if (!user) {
      throw new Error(`No user found for this email`);
    }

    const passwordResetToken = jwt.sign(
      { email: recipientEmail, userId: user.id },
      process.env.APP_SECRET,
      { expiresIn: '900000' },
    );

    let mailResetTemplate = 
    `<body>
      <div style="outline: #F3F3F7 3px solid; padding: 10px; max-width: 630px; margin: 0 auto;">
        <div style="background-color:#F3F3F7; padding:10px; color:#BFBFC1; font-size: 12px; text-align: center; margin-bottom: 25px;">Worklist App</div>
        <div>
          <div style="margin: 0 auto; max-width: 315px; font-size: 10px; color: #8893A3; flex-direction: column;">
            <p style="color: #000"><b>Hi ${user.username},</b></p>
            <p>You recently requested a password reset link for your worklistapp account. Click the button below to reset it.</p>
            <a href="${process.env.FRONTEND_URL}/reset?resetToken=${passwordResetToken}" style="margin: 25px auto; background: #EE5A33; color: #fff; width: 130px; height: 48px; border-radius: 3px; font-size: 10px;  text-decoration: none; padding: 5px 10px;">
                Reset your password
            </a>
            <p>If you did not request a password reset, please ignore this email. This password reset is only valid for the next 15 minutes.</p>
            Thanks,<br /> Emeka and the worklist team. <hr  style="margin-top: 15px; margin-bottom: 15px; border-top: 0.5px solid #F3F3F7;" />
            If you're having trouble clicking the password reset button, copy and paste the URL below into your web browser.<br />
            ${process.env.FRONTEND_URL}/reset?resetToken=${passwordResetToken}
          </div>
        </div>
        <div style="background-color:#F3F3F7; padding:10px; color:#BFBFC1; font-size: 10px; text-align: center; margin-top: 25px;">
          <p>&copy; 2015 WorkList Corporation. All rights reserved.</p>
          WorkList Corporation<br />
          235 Ikorodu Road, <br />
          Lagos, NG.
        </div>
      </div>
    </body>`

    await sendMail(recipientEmail, 'password reset link', mailResetTemplate);

    return { message: 'Check your email for a reset link' };
  },

  async resetPassword(parent, args, ctx, info) {
    let user;
    const { resetToken, password, confirmPassword } = args;

    const decoded = await jwt.verify(resetToken, process.env.APP_SECRET,
      async (error, decodedValue) => {
        if (password !== confirmPassword) {
          throw new Error('Passwords do not match');
        }

        if (error && error.message) {
          throw new Error('Password reset link is either invalid or expired!');
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        user = ctx.db.mutation.updateUser({
          data: { password: hashedPassword },
          where: { id: decodedValue.userId }
        }, info);
      });

      return user;
  },

  async createTodoList(parent, args, ctx, info) {
    const { tasks, labels } = args;

    return await ctx.db.mutation.createTodoList({
      data: {
        ...args,
        author: {
          connect: {
            id: ctx.request.userId
          }
        },
        tasks: {
          create: tasks
        },
        labels: {
          connect: labels,
        }
      }
    }, info)
  },

  async logout(parent, args, ctx, info) {
    ctx.response.clearCookie('token');
    return { message: 'Logged out' }
  }
};

export default Mutation;
