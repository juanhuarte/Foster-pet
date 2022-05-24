const Animal = require("../../../models/animal");
const { authorizationToken } = require("../authorization/authorization");

const updateAnimal = (req, res) => {
  authorizationToken(req, res);
  const { id } = req.params;
  let newInfo = req.body;

  Animal.findByIdAndUpdate(id, newInfo, { new: true })
    .then((result) => {
      res.json({ animal: result });
    })
    .catch((error) => {
      console.log(error);
      res.json({ error: "Couldn't update this animal" });
    });
};

module.exports = { updateAnimal };
