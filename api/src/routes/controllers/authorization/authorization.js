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
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
  if (!token || !decodedToken.id) {
    return res.status(401).json({ error: "token missing or invalid" });
  }
  req.user = {
    userId: decodedToken.id,
    mail: decodedToken.mail,
  };
  next();
  //return decodedToken;
};

module.exports = { authorizationToken };
