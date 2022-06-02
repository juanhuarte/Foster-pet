const jwt = require("jsonwebtoken");
require("dotenv").config();
const { JWT_SECRET } = process.env;

const authorizationToken = (req, res, next) => {
  const authorization = req.get("authorization");
  let token = "";
  if (authorization && authorization.toLowerCase().startsWith("bearer")) {
    token = authorization.substring(7);
  }

  let decodedToken = {};
  try {
    decodedToken = jwt.verify(token, JWT_SECRET);

    if (!token || !decodedToken.id) throw new Error("token missing or invalid");
    req.user = {
      userId: decodedToken.id,
      mail: decodedToken.mail,
    };
    next();
  } catch (error) {
    console.log(error);
    res.json({ success: false, error: error.message });
  }
};

module.exports = { authorizationToken };
