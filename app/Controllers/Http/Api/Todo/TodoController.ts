import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import TodoValidator from "./TodoValidator";
import TodoService from "./TodoService";
export default class TodoController {
  private todoService: TodoService;
  private todoValidator: TodoValidator;

  constructor() {
    this.todoService = new TodoService();
    this.todoValidator = new TodoValidator();
  }
  /**
   * getAllTodo
   */
  public async getAllTodo() {
    return await this.todoService.getTodos();
  }
  /**
   * create todo
   */
  public async createTodo(ctx: HttpContextContract) {
    await this.todoValidator.validateTodoSchema(ctx);
    return await this.todoService.createTodo(ctx);
  }

  /**
   * deleteTodo
   */
  public async deleteTodo(ctx: HttpContextContract) {
    return await this.todoService.deleteTodo(ctx);
  }
}
