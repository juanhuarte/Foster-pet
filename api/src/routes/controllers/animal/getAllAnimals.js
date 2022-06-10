const Animal = require("../../../models/animal");

const getAllAnimals = (req, res) => {
  Animal.find({})
    .then((result) => {
      res.json({ success: true, animals: result });
    })
    .catch((error) => {
      console.log(error);
      res.json({
        success: false,
        error: "Error trying to find all the animals",
      });
    });
};

module.exports = { getAllAnimals };
