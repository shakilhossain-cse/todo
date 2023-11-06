import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import UserService from "./UserService";
import UserValidator from "./UserValidator";

export default class UserController {
  private userService: UserService;
  private userValidator: UserValidator;

  constructor() {
    this.userService = new UserService();
    this.userValidator = new UserValidator();
  }

  /**
   * register
   */
  public async register(ctx: HttpContextContract) {
    await this.userValidator.validateUserRegisterSchema(ctx);
    return await this.userService.register(ctx);
  }

   /**
   * login
   */
   public async login(ctx: HttpContextContract) {
    await this.userValidator.validateUserLoginSchema(ctx);
    return await this.userService.login(ctx);
  }
  /**
   * profile
   */
  public async profile() {

  }
}
