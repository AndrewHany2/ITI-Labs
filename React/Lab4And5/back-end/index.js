require("./helpers/dbConnection");
const express = require("express");
const morgan = require("morgan");
const userRouter = require("./routers/userRouter.js");
const app = express();
const port = 8000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use("/api/user", userRouter);
app.use((err, req, res, next) => {
  res.status(500).json({ msg: err });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
