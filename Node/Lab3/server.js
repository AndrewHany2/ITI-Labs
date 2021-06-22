require("./helpers/dbConnection");
const express = require("express");
const morgan = require("morgan");
require("dotenv").config();
var cors = require("cors");
const path = require("path");
const Todo = require("./models/todo");
const userRouter = require("./routers/user");
const verifyUser = require("./middlewares/verifyUser");
const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

const port = process.env.PORT;

app.use("/assets", express.static(path.join(__dirname, "./resources")));
app.use("/api/user", verifyUser, userRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
