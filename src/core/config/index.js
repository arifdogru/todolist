let url;
let backend;
let frontend;

if (process.env.NODE_ENV === "development") {
  url = "mongodb://heroku_97q29l3k:123456db@ds135128.mlab.com:35128/heroku_97q29l3k";
  backend = "http://localhost:22571/v1";
  frontend = "http://localhost:3000";
} else if (process.env.NODE_ENV === "production") {
  url = "mongodb://heroku_97q29l3k:123456db@ds135128.mlab.com:35128/heroku_97q29l3k";
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
