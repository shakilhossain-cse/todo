import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

import UserQuery from "./UserQuery";
export default class UserService {
  private userQuery;
  constructor() {
    this.userQuery = new UserQuery();
  }

  /**
   * register
   */
  public async register(ctx: HttpContextContract) {
    const data = ctx.request.only(["name", "email", "password"]);
    console.log(data);

    try {
      return await this.userQuery.register(data);
    } catch (error) {
      return ctx.response.status(500).json({ error: "Internal Server Error" });
    }
  }

  /**
   * login
   */
  public async login(ctx: HttpContextContract) {
    const data = ctx.request.only(["email", "password"]);
    try {
      const user = await this.userQuery.login(ctx.auth, data);
      return user;
    } catch (error) {
      return ctx.response.status(500).json({ error: "Internal Server Error" });
    }
  }
}
