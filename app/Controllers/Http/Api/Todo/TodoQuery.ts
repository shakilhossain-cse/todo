import Todo from "App/Models/Todo";

export default class TodoQuery {
  /**
   * index method for get all todos
   */
  public async index(): Promise<Todo[]> {
    const data = await Todo.query().preload('creator', (query) => {query.select(['name', 'email', 'image'])}).paginate(1);
    return data;
  }

  /**
   * index method for store todo
   */
  public async store(auth: any, data: Todo): Promise<Todo> {
    const todo = Todo.create({ ...data, user_id: auth.id });
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
