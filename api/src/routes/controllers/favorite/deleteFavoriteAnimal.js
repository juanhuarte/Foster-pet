const User = require("../../../models/user");

const deleteFavoriteAnimal = async (req, res) => {
  const { userId } = req.user;
  const { id } = req.params;
  try {
    const user = await User.findById(userId).populate({
      path: "favoritesAnimals",
      model: "Animal",
    });

    user.favoritesAnimals = user.favoritesAnimals.filter(
      (animal) => animal._id.toString() !== id
    );
    let savedUser = await user.save();
    res.json({ success: true, favoritesAnimals: savedUser.favoritesAnimals });
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = { deleteFavoriteAnimal };
