import mongoose from "mongoose";

let Schema = mongoose.Schema;
let TaskSchema = new Schema({
  name: {
    type: String,
    required: true
  },

  // Kullanıcı telefon numarası
  description: {
    type: String,
    required: true
  },

  // TODO: fill the status name
  status: {
    type: String,
    default: "Pending"
  }
}, {
  timestamps: true
});
module.exports = mongoose.model("Task", TaskSchema);