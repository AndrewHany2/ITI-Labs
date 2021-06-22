require("./dbConnection");
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
var cors = require("cors");
const path = require("path");
const fs = require("fs");
const Todo = require("./models/todo");

let files = [];
mongoose.set("useFindAndModify", false);
const directoryPath = path.join(__dirname, "resources");
console.log(directoryPath);
fs.readdir(directoryPath, (error, f) => {
  if (error) {
    console.error(error);
  } else {
    files = f;
  }
});

const app = express();
app.use(cors());
const port = 8000;

app.use(express.json());
app.use(morgan("dev"));

app.use("/assets", express.static(path.join(__dirname, "./resources")));

app.get("/todo", (req, res) => {
  Todo.find({})
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

app.get("/todo/:id", (req, res) => {
  const id = req.params.id;
  Todo.findById(id)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

app.post("/todo", (req, res, next) => {
  let { body } = req;
  const todo = new Todo(body);
  todo
    .save()
    .then((result) => {
      console.log(result);
      res.status(201).json(result);
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

app.put("/todo/:id", (req, res) => {
  Todo.findByIdAndUpdate(req.params.id, {
    $set: {
      title: req.body.title,
      body: req.body.body,
      status: req.body.status,
    },
  }).then((result) => {
    res
      .status(200)
      .json({
        result: result,
      })
      .catch((err) => {
        console.log(err);
      });
  });
});

app.delete("/todo/:id", (req, res) => {
  let id = req.params.id;
  Todo.deleteOne({ _id: id }).then((result) => {
    res
      .status(200)
      .json({ result: result })
      .catch((err) => {
        console.log(err);
      });
  });
});

app.patch("/todo/:id", async (req, res) => {
  let id = req.params.id;
  let todo = await Todo.findById(id);
  todo.title = req.body.title || todo.title;
  todo.body = req.body.body || todo.body;
  todo.date = req.body.date || todo.date;
  todo.status = req.body.status || todo.status;
  console.log(todo);
  let result = await todo.save();
  if (result) res.status(200).json({ result: result });
  else console.log(error);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
