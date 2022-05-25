const User = require("../../../models/user");
const bcrypt = require("bcrypt");

const createUser = async (req, res) => {
  const { name, lastname, mail, password, location } = req.body;

  const encryptedPassword = bcrypt.hashSync(password, 10);

  try {
    let foundUser = await User.findOne({ mail });
    if (foundUser) throw new Error("Already Exist an User with that email");
    let newUser = await User.create({
      name: name.toLowerCase(),
      lastname,
      mail,
      password: encryptedPassword,
      profileImage: req.body.profileImage
        ? req.body.profileImage
        : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Breezeicons-actions-22-im-user.svg/1200px-Breezeicons-actions-22-im-user.svg.png",
      location,
    });
    res.json({ success: "The User was created successfully", data: newUser });
  } catch (error) {
    console.log(error);
    res.json({ error: error.message });
  }
};

module.exports = { createUser };
