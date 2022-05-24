const User = require("../../../models/user");
const { authorizationToken } = require("../authorization/authorization");

const deleteFavoriteAnimal = async (req, res) => {
  const decodedToken = authorizationToken(req, res);
  const { id } = req.params;

  const user = await User.findById(decodedToken.id).populate({
    path: "favoritesAnimals",
    model: "Animal",
  });

  try {
    user.favoritesAnimals = user.favoritesAnimals.filter(
      (animal) => animal._id.toString() !== id
    );
    let savedUser = await user.save();
    res.json({ favoritesAnimals: savedUser.favoritesAnimals });
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = { deleteFavoriteAnimal };
