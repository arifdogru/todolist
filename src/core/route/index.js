import express from "express";
import config from "../config";
import middleware from "../middleware";
import initializeDB from "../config/db";
import taskRouter from "../../todos/tasks/task_router"
let router = express();

// conntect to the db
initializeDB(db => {
  // internal MIDDLEWARE
  router.use(middleware({ config, db }));
  router.use("/tasks", taskRouter({ config, db }));
});

export default router;
