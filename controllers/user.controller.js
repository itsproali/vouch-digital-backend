var jwt = require("jsonwebtoken");
const User = require("../models/User");

exports.getToken = async (req, res, next) => {
  try {
    const { email } = req.body;
    const exist = await User.findOne({ email });
    const token = jwt.sign({ email }, process.env.TOKEN_SECRET);
    if (exist) {
      return res.status(200).send({ success: true, token });
    }
    await User.create(req.body);
    res.status(200).send({ success: true, token });
  } catch (error) {
    next(error);
  }
};
