import mongoose from "mongoose";
import config from "./index";

// Turn usePushEach on for all models
mongoose.plugin(schema => {
  schema.options.usePushEach = true;
});

// return the database connection
export default callback => {
  let db = mongoose.connect(config.mongoURL, { useUnifiedTopology: true ,useNewUrlParser:true});
  mongoose.Promise = global.Promise;
  mongoose.set("useCreateIndex", true);
  mongoose.set("useNewUrlParser", true);
  mongoose.set("useFindAndModify", false);
  mongoose.set("bufferMaxEntries", 0); // MongoDB driver buffering @ref https://medium.com/talaviss/mongoose-keeps-hanging-790264680d50
  mongoose.set("bufferCommands", false); // Mongoose-specific buffering @ref https://thecodebarbarian.com/whats-new-in-mongoose-5-improved-connections
  mongoose.set("debug", true);
  callback(db);
};
