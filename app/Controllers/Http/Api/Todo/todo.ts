import Route from "@ioc:Adonis/Core/Route";

Route.group(() => {
  Route.get("/todos", "Api/Todo/TodoController.getAllTodo");
  Route.post("/todo", "Api/Todo/TodoController.createTodo");
  Route.delete("/todo/:id", "Api/Todo/TodoController.deleteTodo");
}).prefix("api").middleware('auth')
