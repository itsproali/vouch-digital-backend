const jwt = require("jsonwebtoken");

// JWT Verification
const verifyToken = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res
      .status(401)
      .send({ success: false, message: "Unauthorized Access" });
  }
  const token = authHeader.split(" ")[1];
  await jwt.verify(token, process.env.TOKEN_SECRET, (err, decoded) => {
    if (err) {
      return res
        .status(403)
        .send({ success: false, message: "Forbidden Access" });
    }
    req.decoded = decoded;
    next();
  });
};

module.exports = verifyToken;
