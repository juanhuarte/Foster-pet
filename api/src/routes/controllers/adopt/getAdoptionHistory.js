const Adopt = require("../../../models/adopt");

const getAdoptionHistory = (req, res) => {
  const { userId } = req.user;
  Adopt.find({ user: userId })
    .then((result) => {
      res.json({ success: true, adoptionHistory: result });
    })
    .catch((error) => {
      console.log(error);
      res.json({ success: false, error: "Couldn't get your adoption history" });
    });
};
module.exports = { getAdoptionHistory };
