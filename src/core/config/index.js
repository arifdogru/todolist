let url;
let backend;
let frontend;

if (process.env.NODE_ENV === "development") {
  url = "mongodb://localhost:27017/todolist";
  backend = "http://localhost:22571/v1";
  frontend = "http://localhost:3000";
} else if (process.env.NODE_ENV === "production") {
  url = "mongodb://localhost:27017/todolist";
  backend = "http://localhost:22571/v1";
  frontend = "http://localhost:3000";
}

export default {
  port: 22571,
  mongoURL: url,
  bodyLimit: "100mb",
  backend: backend,
  frontend: frontend
};
