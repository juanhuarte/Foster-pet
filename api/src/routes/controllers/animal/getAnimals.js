const Animal = require("../../../models/animal");

const getAnimals = (req, res) => {
  Animal.find({ adoptedStatus: false })
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

module.exports = { getAnimals };
