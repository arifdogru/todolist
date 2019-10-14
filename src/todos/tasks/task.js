import mongoose from "mongoose";

let Schema = mongoose.Schema;
let TaskSchema = new Schema({
  name: {
    type: String,
    required: true
  },

  description: {
    type: String
  },
  completed: {
    type: Boolean,
    default: false //INCOMPLETED, COMPLETED
  }
}, {
  timestamps: true
});
module.exports = mongoose.model("Task", TaskSchema);