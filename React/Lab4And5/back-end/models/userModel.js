const mongoose = require("mongoose");
const User = mongoose.model("User", {
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    data: Buffer,
  },
});

module.exports = User;
