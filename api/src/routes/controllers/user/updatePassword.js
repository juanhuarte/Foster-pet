const User = require("../../../models/user");
const bcrypt = require("bcrypt");
const { authorizationToken } = require("../authorization/authorization");

const updatePassword = async (req, res) => {
  const { oldPassword, newPassword } = req.body;

  const decodedToken = authorizationToken(req, res);

  const user = await User.findById(decodedToken.id);
  if (bcrypt.compareSync(oldPassword, user.password)) {
    let encryptedPassword = bcrypt.hashSync(newPassword, 10);
    await User.updateOne(
      { _id: decodedToken.id },
      { password: encryptedPassword }
    ).catch((err) =>
      res.send({
        message: "Error trying to change the password",
      })
    );
    res.send({
      success: "Password has benn changed successfully",
    });
  } else {
    res.send({ error: "wrong password" });
  }
};

module.exports = { updatePassword };
