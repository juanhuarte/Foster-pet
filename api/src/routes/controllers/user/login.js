const User = require("../../../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require("dotenv").config();
const { JWT_SECRET } = process.env;

const login = (req, res) => {
  const { mail, password } = req.query;

  User.findOne({ mail })
    // .populate("animals")
    .then((result) => {
      if (!result) res.json({ message: "Incorrect data" });
      else {
        if (bcrypt.compareSync(password, result.password)) {
          const jwtToken = jwt.sign(
            {
              id: result.id,
              mail: result.mail,
            },
            JWT_SECRET
          );
          res.json({ user: result, token: jwtToken });
        } else {
          res.json({ message: "Incorrect data" });
        }
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

module.exports = { login };
