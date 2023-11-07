import CommentService from "./CommentService";
import CommentValidator from "./CommentValidator";
import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

export default class CommentController {
  private commentService: CommentService;
  private commentValidator: CommentValidator;

  constructor() {
    this.commentService = new CommentService();
    this.commentValidator = new CommentValidator();
  }
  /**
   * createComment
   */
  public async createComment(ctx: HttpContextContract) {
    await this.commentValidator.validateCommentSchema(ctx)
    return this.commentService.createComment(ctx)
  }

  /**
   * deleteComment
   */
  public async deleteComment(ctx: HttpContextContract) {
    await this.commentValidator.validateCommentDeleteSchema(ctx);
    return await this.commentService.deleteComment(ctx);
  }
}
