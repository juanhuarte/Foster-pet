const Animal = require("../../../models/animal");
const User = require("../../../models/user");
const { authorizationToken } = require("../authorization/authorization");

const deleteAnimal = async (req, res) => {
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
    await user.save();

    const deletedAnimal = await Animal.findByIdAndDelete(id);
    if (deletedAnimal) {
      res.json({ message: `The animal ${id} was deleted successfully` });
    } else
      res.json({
        message: "This animal doesn't exist",
      });
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = { deleteAnimal };
