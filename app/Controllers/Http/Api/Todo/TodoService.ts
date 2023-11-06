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
    const todo = await this.todoQuery.store(ctx.auth,data);
    return todo;
  }

  /**
   * Delete todo
   */

  public async deleteTodo(id:number) {
    const todo = await this.todoQuery.destroy(id);
    return todo;
  }
}
