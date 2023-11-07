import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import TodoQuery from "./TodoQuery";

export default class ExampleService {
  private todoQuery;
  constructor() {
    this.todoQuery = new TodoQuery();
  }

  /**
   * getTodos
   */
  public async getTodos() {
    const data = await this.todoQuery.index();
    return data;
  }

  /**
   * Create todo
   */
  public async createTodo(ctx: HttpContextContract) {
    const data = ctx.request.only(["title", "is_completed"]);

    try {
      const todo = await this.todoQuery.store(ctx.auth.user?.id, data);
      return { message: "todo created successfully", data: todo };
    } catch (error) {
      ctx.response.internalServerError("something went wrong");
    }
  }

  /**
   * Delete todo
   */

  public async deleteTodo(ctx: HttpContextContract) {
    try {
      const todo = await this.todoQuery.destroy(ctx.params.id);
      return { message: "todo deleted successfully", data: todo };
    } catch (error) {
      ctx.response.internalServerError({ message: "something went wrong" });
    }
  }
}
