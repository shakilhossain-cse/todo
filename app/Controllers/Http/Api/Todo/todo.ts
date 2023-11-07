import Route from "@ioc:Adonis/Core/Route";

Route.group(() => {
  Route.get("/todos", "Api/Todo/TodoController.getAllTodo");
  Route.post("/todo", "Api/Todo/TodoController.createTodo");
  Route.get('/todo/:id', "Api/Todo/TodoController.showTodo")
  Route.patch('/todo/:id', "Api/Todo/TodoController.updateTodo")
  Route.delete("/todo/:id", "Api/Todo/TodoController.deleteTodo");
}).prefix("api").middleware('auth')
