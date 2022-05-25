const User = require("../../../models/user");

const getFavoritesAnimals = (req, res) => {
  const { userId } = req.user;

  User.findById(userId)
    .populate({
      path: "favoritesAnimals",
      model: "Animal",
    })
    .then((result) => {
      if (result) res.json(result.favoritesAnimals);
    })
    .catch((error) => {
      console.log(error);
      res.json({ success: false, error: "This user doesn't exist" });
    });
};

module.exports = { getFavoritesAnimals };
