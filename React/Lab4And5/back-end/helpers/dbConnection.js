const mongoose = require("mongoose");
const url =
  "mongodb+srv://andrew:andrew123@cluster0.i1aj3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("connected to database"));
exports.module = db;
