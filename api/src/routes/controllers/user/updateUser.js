const User = require("../../../models/user");
const { authorizationToken } = require("../authorization/authorization");

const updateUser = (req, res) => {
  let newInfo = req.body;

  const decodedToken = authorizationToken(req, res);

  User.findByIdAndUpdate(decodedToken.id, newInfo, { new: true })
    .then((result) => {
      res.json({ user: result });
    })
    .catch((error) => {
      console.log(error);
      res.json({ error: "Couldn't update the User" });
    });
};
module.exports = { updateUser };
