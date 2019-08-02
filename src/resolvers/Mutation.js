import bcrypt from 'bcryptjs';

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

    return ctx.db.mutation.createUser({ data: userDetails });
  },

  async signin(parent, args, ctx, info) {
    const { email, password } = args;
    const user = await ctx.db.query.user({ where: { email } });

    if (!user) {
      throw new Error(`No user found for this email: ${email}`);
    }
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      throw new Error('Username and password don\'t match');
    }
    
    return user;
  },
};

export default Mutation;
