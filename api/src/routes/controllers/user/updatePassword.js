const User = require("../../../models/user");
const bcrypt = require("bcrypt");

const updatePassword = async (req, res) => {
  const { oldPassword, newPassword } = req.body;
  const { userId } = req.user;

  const user = await User.findById(userId);
  if (bcrypt.compareSync(oldPassword, user.password)) {
    let encryptedPassword = bcrypt.hashSync(newPassword, 10);
    await User.updateOne(
      { _id: userId },
      { password: encryptedPassword }
    ).catch((err) =>
      res.json({
        success: false,
        error: "Error trying to change the password",
      })
    );
    res.json({
      success: true,
      message: "Password has benn changed successfully",
    });
  } else {
    res.json({ success: false, error: "wrong password" });
  }
};

module.exports = { updatePassword };
