const User = require("../../../models/user");

const updateUser = (req, res) => {
  let newInfo = req.body;
  const { userId } = req.user;

  User.findByIdAndUpdate(userId, newInfo, { new: true })
    .then((result) => {
      res.json({
        success: true,
        user: result,
      });
    })
    .catch((error) => {
      console.log(error);
      res.json({ error: "Couldn't update the User" });
    });
};
module.exports = { updateUser };
