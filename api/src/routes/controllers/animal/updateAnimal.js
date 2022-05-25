const Animal = require("../../../models/animal");

const updateAnimal = (req, res) => {
  const { id } = req.params;
  let newInfo = req.body;

  Animal.findByIdAndUpdate(id, newInfo, { new: true })
    .then((result) => {
      res.json({ success: true, animal: result });
    })
    .catch((error) => {
      console.log(error);
      res.json({ success: false, error: "Couldn't update this animal" });
    });
};

module.exports = { updateAnimal };
