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
  }
};

export default Mutation
