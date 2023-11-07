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
      return ctx.response.internalServerError("something went wrong");
    }
  }

  /**
   * view Todo
   */
  public async viewTodo(ctx: HttpContextContract) {
    try {
      return await this.todoQuery.show(ctx.params.id);
    } catch (error) {
      return ctx.response.internalServerError("something went wrong");
    }
  }



  /**
   * update Todo
   */
  public async updateTodo(ctx:HttpContextContract) {
    try {
      const data = ctx.request.only(['title', 'is_completed'])
      return await this.todoQuery.update(ctx.params.id, data)
    } catch (error) {
      return ctx.response.internalServerError("something went wrong");
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
      return ctx.response.internalServerError({
        message: "something went wrong",
      });
    }
  }
}
