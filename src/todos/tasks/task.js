import mongoose from "mongoose";

let Schema = mongoose.Schema;
let TaskSchema = new Schema({
  name: {
    type: String,
    required: true
  },

  description: {
    type: String,
    required: true
  },
  status: {
    type: String,
    default: "INCOMPLATED"
  }
}, {
  timestamps: true
});
module.exports = mongoose.model("Task", TaskSchema);