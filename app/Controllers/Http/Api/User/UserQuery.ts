import User from "App/Models/User";

export default class UserQuery {
  /**
   * login this method for login
   */
  public async login(auth, data) {
    const user = await User.findBy("email", data.email);
    const token = await auth.use("api").attempt(data.email, data.password);
    return { data: user, token, message: "Login successfully" };
  }
  /**
   * store method for register user
   */
  public async register(data: User) {
    const todo = await User.create(data);
    return {
      message: "register successfully",
      data: todo,
    };
  }

  /**
   * profile method for  ger user data with post
   */
  public async profile(id: number) {
    return await User.query().where("id", id).preload("todo").firstOrFail();
  }
}
