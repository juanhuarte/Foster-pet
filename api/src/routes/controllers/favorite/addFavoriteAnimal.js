const Animal = require("../../../models/animal");
const User = require("../../../models/user");
const { authorizationToken } = require("../authorization/authorization");

const addFavoriteAnimal = async (req, res) => {
  const decodedToken = authorizationToken(req, res);
  const { id } = req.params;

  const animal = await Animal.findById(id);

  const user = await User.findById(decodedToken.id).populate({
    path: "favoritesAnimals",
    model: "Animal",
  });

  const noFavoriteAnimalAlready = (animal) =>
    !user.favoritesAnimals
      .map((a) => a._id.toString())
      .includes(animal._id.toString());
  if (animal && noFavoriteAnimalAlready(animal)) {
    try {
      user.favoritesAnimals = user.favoritesAnimals.concat(animal);
      let savedUser = await user.save();
      res.json({ favoritesAnimals: savedUser.favoritesAnimals });
    } catch (error) {
      throw new Error(error);
    }
  } else res.json({ error: "This animal is already your favorite" });
};

module.exports = { addFavoriteAnimal };
