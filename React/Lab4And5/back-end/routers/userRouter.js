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
  const { name, age } = req.body;
  const userImage = req.file.path;
  try {
    const user = new User({ name, age, userImage });
    const savedUser = await user.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(400).json(error);
  }
});

userRouter.get("/:name", async (req, res) => {
  const { name } = req.params;
  const user = await User.findOne({ name: name });
  if (user) {
    res.status(200).json(user);
  } else res.status(404).send("user not found, invalid name");
});

userRouter.get("/", async (req, res) => {
  const user = await User.find({});
  if (user) {
    res.status(200).json(user);
  } else res.status(404).send("user not found, invalid name");
});

module.exports = userRouter;
