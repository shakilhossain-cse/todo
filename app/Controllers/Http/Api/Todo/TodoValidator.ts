import { schema } from "@ioc:Adonis/Core/Validator";
import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
export default class TodoValidator {
  public async validateTodoSchema(ctx: HttpContextContract) {
    const todoSchema = schema.create({
      title: schema.string(),
      is_completed: schema.boolean(),
    });
    const msg = {
      "title.required": "Title is required",
      "title.string": "Title must be string",
      "is_completed.required": "Is completed felid is required",
      "is_completed.boolean": "Is completed felid must be boolean",
    };
    try {
      const payload = await ctx.request.validate({
        schema: todoSchema,
        messages: msg,
      });
      return payload;
    } catch (error) {
      return ctx.response.status(422).send(error.messages);
    }
  }
}
