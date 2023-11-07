import Route from "@ioc:Adonis/Core/Route";

Route.group(() => {
  Route.post("/comment", "Api/Comment/CommentController.createComment");
  Route.delete("/comment", "Api/Comment/CommentController.deleteComment");
})
  .prefix("api")
  .middleware("auth");
