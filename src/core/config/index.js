let url;
let back_end;
let service_repository;
let notification_service_url;
let front_end;

if (process.env.NODE_ENV === "development") {
  url = "mongodb://localhost:27017/todolist";
  back_end = "http://localhost:22571/v1";
  front_end = "http://localhost:3000";
} else if (process.env.NODE_ENV === "production") {
  url = "mongodb://localhost:27017/todolist";
  back_end = "http://localhost:22571/v1";
  front_end = "http://localhost:3000";
}



export default {
  port: 22571,
  mongoURL: url,
  bodyLimit: "100mb",
  back_end: back_end,
  front_end:front_end
};