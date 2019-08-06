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
  }
};

export default Query;
