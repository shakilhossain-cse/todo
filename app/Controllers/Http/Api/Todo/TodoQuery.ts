import Todo from "App/Models/Todo";

export default class TodoQuery {
  /**
   * index method for get all todos
   */
  public async index(): Promise<Todo[]> {
    return await Todo.query()
      .preload("creator", (query) => {
        query.select(["name", "email", "image"]);
      })
      .preload("comments", (query) => {
        query
          .limit(3)
          .preload("creator", (q) => q.select(["name", "email", "image"]));
      })
      .paginate(1);
  }

  /**
   * index method for store todo
   */
  public async store(userId: number, data: Todo): Promise<Todo> {
    return Todo.create({ ...data, user_id: userId });
  }

  /**
   * show method for view todo
   */
  public async show(todoId: number): Promise<Todo> {
    return await Todo.findOrFail(todoId);
  }

  /**
   * update method for update data
   */
  public async update(todoId: number, data: Todo) {
    const todo = await Todo.findOrFail(todoId);
    todo.title = data.title;
    todo.is_completed = data.is_completed;
    todo.save();
    return todo;
  }

  /**
   * destroy method for destroy todo
   */
  public async destroy(id: number): Promise<Todo> {
    const todo = await Todo.findOrFail(id);
    todo.delete();
    return todo;
  }
}
