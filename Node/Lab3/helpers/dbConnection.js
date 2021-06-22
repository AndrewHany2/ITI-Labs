const mongoose = require("mongoose");
require("dotenv").config();

const url = process.env.URL;

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
mongoose.set("useFindAndModify", false);
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("connected to database"));
exports.module = db;
