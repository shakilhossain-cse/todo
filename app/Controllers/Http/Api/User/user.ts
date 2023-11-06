import Route from "@ioc:Adonis/Core/Route";

Route.group(() => {
  Route.post("/login", "Api/User/UserController.login");
  Route.post("/register", "Api/User/UserController.register");
  Route.delete("/profile", "Api/User/UserController.profile").middleware('auth');
}).prefix("api");
