const User = require("../../../models/user");
const bcrypt = require("bcrypt");

const createUser = (req, res) => {
  const { name, lastname, mail, password, location } = req.body;

  const encryptedPassword = bcrypt.hashSync(password, 10);

  User.findOne({ mail })
    .then((result) => {
      if (result)
        res.json({ message: "Already Exist an User with that email" });
    })
    .catch((error) => {
      console.log(error);
    });

  let newUser = new User({
    name: name.toLowerCase(),
    lastname,
    mail,
    password: encryptedPassword,
    profileImage: req.body.profileImage
      ? req.body.profileImage
      : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Breezeicons-actions-22-im-user.svg/1200px-Breezeicons-actions-22-im-user.svg.png",
    location,
  });

  newUser
    .save()
    .then((result) => {
      if (result)
        res.json({
          success: "The User was created successfully",
          data: result,
        });
    })
    .catch((error) => {
      console.log(error);
      res.json({ error: "Couldn't create the User" });
    });
};

module.exports = { createUser };
