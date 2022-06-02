const Animal = require("../../../models/animal");
const User = require("../../../models/user");

const addFavoriteAnimal = async (req, res) => {
  const { userId } = req.user;
  const { id } = req.params;

  try {
    const animal = await Animal.findById(id);
    if (!animal) throw new Error("This animal doesn't exist");

    const user = await User.findById(userId).populate({
      path: "favoritesAnimals",
      model: "Animal",
    });
    const noFavoriteAnimalAlready = (animal) =>
      !user.favoritesAnimals
        .map((a) => a._id.toString())
        .includes(animal._id.toString());
    if (animal && noFavoriteAnimalAlready(animal)) {
      user.favoritesAnimals = user.favoritesAnimals.concat(animal);
      let savedUser = await user.save();
      res.json({ success: true, favoritesAnimals: savedUser.favoritesAnimals });
    } else throw new Error("This animal is already your favorite");
  } catch (error) {
    console.log(error);
    res.json({ success: false, error: error.message });
  }
};

module.exports = { addFavoriteAnimal };

// Lo pasamos a la manera mongDB!!!!
