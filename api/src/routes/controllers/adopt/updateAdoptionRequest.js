const Adopt = require("../../../models/adopt");

const updateAdoptionRequest = (req, res) => {
  const { id } = req.params;
  let newInfo = req.body;

  Adopt.findByIdAndUpdate(id, newInfo, { new: true })
    .then((result) => {
      res.json({
        success: true,
        message: "The Adoption Request was updated success",
        data: result,
      });
    })
    .catch((error) => {
      console.log(error);
      res.json({ success: false, error: "Couldn't update adoption request" });
    });
};
module.exports = { updateAdoptionRequest };
