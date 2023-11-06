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
    const todos = await this.todoService.getTodos();
    return todos;
  }
  /**
   * create todo
   */
  public async createTodo(ctx: HttpContextContract) {
    await this.todoValidator.validateTodoSchema(ctx);
    const todo = await this.todoService.createTodo(ctx);
    return { message: "todo created successfully", data: todo };
  }

  /**
   * deleteTodo
   */
  public async deleteTodo({ response, params }: HttpContextContract) {
    try {
      const todo = await this.todoService.deleteTodo(params.id);
      return { message: "todo deleted successfully", data: todo };
    } catch (error) {
      console.log(error);
      response.internalServerError({ message: "something went wrong" });
    }
  }
}
