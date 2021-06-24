require("./helpers/dbConnection");
const express = require("express");
const morgan = require("morgan");
const userRouter = require("./routers/userRouter.js");
var cors = require("cors");
const app = express();
const port = 8000;

app.use(cors());
app.use(morgan("dev"));
app.use(express.static("uploads"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/users", userRouter);
app.use((err, req, res, next) => {
  console.log("🚀 ~ file: index.js ~ line 15 ~ app.use ~ err", err);
  res.status(500).json({ msg: err });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
