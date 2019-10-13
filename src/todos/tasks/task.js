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
  complated: {
    type: Boolean,
    default: false //INCOMPLATED, COMPLATED
  }
}, {
  timestamps: true
});
module.exports = mongoose.model("Task", TaskSchema);