const Animal = require("../../../models/animal");

const getAnimals = (req, res) => {
  Animal.find({})
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      console.log(error);
      res.json({ error: "Error trying to find all the animals" });
    });
};

module.exports = { getAnimals };
