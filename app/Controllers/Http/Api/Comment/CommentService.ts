import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import CommentQuery from "./CommentQuery";

export default class CommentService {
  private commentQuery: CommentQuery;
  constructor() {
    this.commentQuery = new CommentQuery();
  }

  /**
   * createComment
   */
  public async createComment(ctx: HttpContextContract) {
    try {
      const data = ctx.request.only(["comment", "todo_id"]);
      return await this.commentQuery.store(ctx.auth.user?.id, data);
    } catch (error) {
      return ctx.response.internalServerError("something went wrong");
    }
  }
  /**
   * deleteComment
   */
  public async deleteComment(ctx: HttpContextContract) {
    try {
      const data = ctx.request.only(["commentId"]);
      return await this.commentQuery.destroy(ctx.auth.user?.id, data);
    } catch (error) {
      return ctx.response.internalServerError("something went wrong");
    }
  }
}
