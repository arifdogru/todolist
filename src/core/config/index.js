let url;
let backend;
let frontend;
/*
if (process.env.NODE_ENV === "development") {

  url = "mongodb://localhost:27017/todolist";
  backend = "http://localhost:22571/v1";
  frontend = "http://localhost:3000";
} else if (process.env.NODE_ENV === "production") {
  url = "mongodb://heroku_97q29l3k:123456db@ds135128.mlab.com:35128/heroku_97q29l3k";
  back_end = "https://todolist-backend-arifdogru.herokuapp.com:31571/v1";
  front_end = "https://todolist-frontend-arifdogru.herokuapp.com:33571";
}
*/
url = "mongodb://arif:123456db@ds135128.mlab.com:35128/heroku_v4jmvmbg";
backend = "https://todolist-backend-arifdogru.herokuapp.com:31571";
frontend = "https://todolist-frontend-arifdogru.herokuapp.com:33571";

export default {
  port: 31571,
  mongoURL: url,
  bodyLimit: "100mb",
  backend: backend,
  frontend: frontend
};
