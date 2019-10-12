import express from "express";
import config from "../config";
import middleware from "../middleware";
import initializeDB from "../config/db";

let router = express();

// conntect to the db
initializeDB(db => {
  // internal MIDDLEWARE
  router.use(middleware({ config, db }));

});

export default router;
