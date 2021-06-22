const userRouter = require("express").Router();
const User = require("../models/userModel");

userRouter.post("/register", async (req, res) => {
  const { body } = req;
  try {
    const user = new User(body);
    const savedUser = await user.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(400).json(error);
  }
});

userRouter.get("/profile/:name", async (req, res) => {
  const { name } = req.params;
  const user = await User.findOne({ name: name });
  if (user) {
    res.status(200).json(user);
  } else res.status(404).send("user not found, invalid name");
});

module.exports = userRouter;
