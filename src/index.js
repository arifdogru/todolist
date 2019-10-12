import http from "http";
import express from "express";
import compression from "compression";
import bodyParser from "body-parser";
import config from "./core/config";
import route from "./core/route";
import cors from "cors";

let app = express();
app.server = http.createServer(app);

app.use(compression());
app.use(cors());

// parse application/json
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json({
  limit: config.bodyLimit
}));

// api routes V...
app.use("/v1", route);
app.server.listen(config.port);
console.log(`TodoList Services Started on port ${app.server.address().port} at ${new Date().toISOString()}`);
console.log("Appserver -> ", app.server.address());

// Acces Control
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  // yıldız yerine sadece bir url verilerek diğer url lerden gelen istekler engellenebilir
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.header("Accept-Encoding", "br, gzip, deflate");
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});

// --COMMON ERROR HANDLING--
// error handling -
app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

// all unecpected errors handler
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});

export default app;
