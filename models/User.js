const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: String,
    email: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      default: "admin",
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
