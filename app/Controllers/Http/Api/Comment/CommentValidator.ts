import { schema } from "@ioc:Adonis/Core/Validator";
import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
export default class CommentValidator {
  public async validateCommentSchema(ctx: HttpContextContract) {
    const commentSchema = schema.create({
      comment: schema.string(),
      todo_id: schema.number(),
    });
    const msg = {
      "comment.required": "Title is required",
      "comment.string": "Title must be string",
      "todo_id.required": "Post id must be required",
      "todo_id.number": "Post id must be valid id",
    };
    try {
      const payload = await ctx.request.validate({
        schema: commentSchema,
        messages: msg,
      });
      return payload;
    } catch (error) {
      return ctx.response.status(422).send(error.messages);
    }
  }

  public async validateCommentDeleteSchema(ctx: HttpContextContract) {
    const commentSchema = schema.create({
      commentId: schema.number(),
    });
    const msg = {
      "commentId.required": "Comment id is required",
      "Comment.number": "Comment id must be number",
    };
    try {
      const payload = await ctx.request.validate({
        schema: commentSchema,
        messages: msg,
      });
      return payload;
    } catch (error) {
      return ctx.response.status(422).send(error.messages);
    }
  }
}
