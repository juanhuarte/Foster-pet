const Animal = require("../../../models/animal");
const User = require("../../../models/user");

const deleteAnimal = async (req, res) => {
  const { id } = req.params;
  try {
    const users = await User.find({}).populate({
      path: "favoritesAnimals",
      model: "Animal",
    });
    users.forEach(async (user) => {
      user.favoritesAnimals = user.favoritesAnimals.filter(
        (animal) => animal._id.toString() !== id
      );
      await user.save();
    });
    const deletedAnimal = await Animal.findByIdAndDelete(id);
    if (deletedAnimal) {
      res.json({
        success: true,
        message: `The animal ${id} was deleted successfully`,
      });
    } else throw new Error("This animal doesn't exist");
  } catch (error) {
    console.log(error);
    res.json({ error: error.message });
  }
};

module.exports = { deleteAnimal };
