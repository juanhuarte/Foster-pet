const User = require("../../../models/user");

const getUserProfile = (req, res) => {
  const { userId } = req.params;
  User.findById(userId)
    .then((result) => {
      res.json({
        success: true,
        userProfile: {
          name: result.name,
          lastname: result.lastname,
          mail: result.mail,
          profileImage: result.profileImage,
          location: result.location,
        },
      });
    })
    .catch((error) => {
      console.log(error);
      res.json({ success: false, error: "Couldn't get the user" });
    });
};
module.exports = { getUserProfile };
