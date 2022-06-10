const Adopt = require("../../../models/adopt");

const getAdoptionRequest = (req, res) => {
  const { userId } = req.user;

  Adopt.find({
    status: "pending",
    rescuer: userId,
  })
    .then((result) => {
      res.json({ success: true, data: result });
    })
    .catch((error) => {
      console.log(error);
      res.json({ success: false, error: "Couldn't get any adoption request" });
    });
};

module.exports = { getAdoptionRequest };
