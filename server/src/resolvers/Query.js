const Query = {
  async getTodoLists(parent, args, ctx, info) {
    const lists = await ctx.db.query.todoLists({},
      `{id
        isPinned
        title
        tasks {
          id
          content
          isCompleted
          belongsTo {
            id
            author {
              username
              email
            }
          }
        }}`);
    return lists;
  },

  async currentUser(parent, args, ctx, info) {
    if (!ctx.request.userId) {
      return null;
    }
    return ctx.db.query.user({
      where: {
        id: ctx.request.userId,
      },
    }, info);
  }
};

export default Query;
