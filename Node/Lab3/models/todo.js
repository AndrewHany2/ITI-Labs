const mongoose = require("mongoose");
const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  body: {
    type: String,
  },
  status: {
    type: String,
    enum: ["DONE", "INPROGRESS", "PENDING"],
  },
});
const Todo = mongoose.model("todo", todoSchema);

module.exports = Todo;
console.log(Todo);
