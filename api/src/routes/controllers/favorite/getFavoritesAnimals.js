const User = require("../../../models/user");
const { authorizationToken } = require("../authorization/authorization");

const getFavoritesAnimals = (req, res) => {
  const decodedToken = authorizationToken(req, res);

  User.findById(decodedToken.id)
    .populate({
      path: "favoritesAnimals",
      model: "Animal",
    })
    .then((result) => {
      if (result) res.json(result.favoritesAnimals);
    })
    .catch((error) => {
      console.log(error);
      res.json({ error: "This user doesn't exist" });
    });
};

module.exports = { getFavoritesAnimals };
