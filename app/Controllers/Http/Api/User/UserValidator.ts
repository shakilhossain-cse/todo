import { schema, rules } from "@ioc:Adonis/Core/Validator";
import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

export default class UserValidator {
  public async validateUserRegisterSchema(ctx: HttpContextContract) {
    const userSchema = schema.create({
      name: schema.string(),
      email: schema.string([rules.email()]),
      password: schema.string([rules.confirmed()]),
    });

    const msg = {
      "name.required": "Name is required",
      "name.string": "Name must be a string",
      "email.required": "Email is required",
      "email.email": "Email must be a valid email",
      "password.confirmed": "Password confirmation does not match",
    };

    try {
      const payload = ctx.request.validate({
        schema: userSchema,
        messages: msg,
      });
      return payload;
    } catch (error) {
      return ctx.response.status(422).send(error.messages);
    }
  }


  public async validateUserLoginSchema(ctx: HttpContextContract) {
    const userSchema = schema.create({
      email: schema.string([rules.email()]),
      password: schema.string(),
    });

    const msg = {
      "email.required": "Email is required",
      "email.email": "Email must be a valid email",
      "password.required": "Password is required",
    };

    try {
      const payload = ctx.request.validate({
        schema: userSchema,
        messages: msg,
      });
      return payload;
    } catch (error) {
      return ctx.response.status(422).send(error.messages);
    }
  }
}
