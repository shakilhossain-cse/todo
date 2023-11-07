import Comment from "App/Models/Comment";

export default class CommentQuery {
  /**
   * store comment
   */
  public async store(userId, data): Promise<Comment> {
    return await Comment.create({ ...data, user_id: userId });
  }

 
  /**
   * destroy comment
   */
  public async destroy(userId, data) {
    const comment = await Comment.findOrFail(data.commentId);
    if (comment && comment.user_id === userId) {
      comment.delete();
      return comment;
    }
  }
}
