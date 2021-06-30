const userRouter = require("express").Router();
const User = require("../models/userModel");
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

function checkFileType(file, cb) {
  const filetypes = /jpg|jpeg|png/;
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = filetypes.test(file.mimetype);

  if (extname && mimetype) {
    return cb(null, true);
  } else {
    cb("Images only!");
  }
}
const upload = multer({
  storage,
  limits: { fileSize: 1024 * 1024 * 20 },
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb);
  },
});

userRouter.post("/register", upload.single("userImage"), async (req, res) => {
  const { name, email } = req.body;
  const userImage = req.file.path;
  try {
    const user = new User({ name, email, userImage });
    const savedUser = await user.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(400).json(error);
  }
});

userRouter.get("/:id", async (req, res) => {
  const { id } = req.params;
  const user = await User.findOne({ _id: id });
  if (user) {
    res.status(200).json(user);
  } else res.status(404).send("user not found, invalid id");
});

userRouter.get("/", async (req, res) => {
  const users = await User.find({});
  if (users) {
    res.status(200).json(users);
  } else res.status(404).send("user not found, invalid name");
});

userRouter.delete("/:id", async (req, res) => {
  const id = req.params.id;
  User.deleteOne({ _id: id })
    .then((result) => {
      res.status(200).json({ result: result });
    })
    .catch((err) => {
      next(err);
    });
});

userRouter.put("/:id", upload.single("userImage"), async (req, res, next) => {
  try {
    const id = req.params.id;
    const user = await User.findOne({ _id: id });
    const name = req.body.name || user.name;
    const email = req.body.email || user.email;
    const userImage = req.file ? req.file.path : user.userImage;
    user.name = name;
    user.email = email;
    user.userImage = userImage;
    const response = await user.save();
    if (response) {
      res.status(200).json({ response: response });
    }
  } catch (e) {
    next(e);
  }
});

module.exports = userRouter;
