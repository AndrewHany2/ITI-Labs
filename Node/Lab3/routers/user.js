const userRouter = require("express").Router();
const util = require("util");
const { generateToken, verifyToken } = require("../helpers/token");
const User = require("../models/user");
const bcrypt = require("bcrypt");

var saltRounds = 10;

// userRouter.post("/register", async (req, res) => {
//   const { body } = req;
//   bcrypt
//     .genSalt(saltRounds)
//     .then((salt) => {
//       bcrypt.hash(body.password, salt).then((hashedPassword) => {
//         const user = new User(body);
//         user
//           .save()
//           .then((savedUser) => {
//             res.status(201).json(savedUser);
//           })
//           .catch((err) => {
//             res.status(400).json(err);
//           });
//       });
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

userRouter.post("/login", async (req, res, next) => {
  const { body } = req;
  if (body.username && body.password) {
    try {
      const user = await User.findOne({ username: body.username });
      if (user) {
        const match = await bcrypt.compare(body.password, user.password);
        if (match) {
          const token = await generateToken(user._id);
          res.status(200).json({ token });
        } else res.status(400).json({ status: "password invalid" });
      } else res.status(404).json({ status: "user invalid" });
    } catch (error) {
      next(new Error("server error"));
    }
  }
});
userRouter.post("/register", async (req, res) => {
  const { body } = req;
  try {
    const salt = await genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(body.password, salt);
    body.password = hashedPassword;
    const user = new User(body);
    const savedUser = await user.save();
    res.status(200).json(savedUser);
  } catch (err) {
    res.status(400).json(err);
  }
  bcrypt
    .genSalt(saltRounds)
    .then((salt) => {
      bcrypt.hash(body.password, salt).then((hashedPassword) => {
        const user = new User(body);
        user
          .save()
          .then((savedUser) => {
            res.status(201).json(savedUser);
          })
          .catch((err) => {
            res.status(400).json(err);
          });
      });
    })
    .catch((err) => {
      console.log(err);
    });
});
userRouter.get("/:username", (req, res) => {
  const { username } = req.params;
  if (req.verified) {
    const user = await User.findOne({ _id: req.verified.id });
    res.status(200).json(user);
  }
});
