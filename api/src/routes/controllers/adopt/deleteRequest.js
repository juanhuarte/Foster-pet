const Adopt = require("../../../models/adopt");

const deleteRequest = async (req, res) => {
  const { userId } = req.user;
  const { id } = req.params;
  try {
    let foundAdoption = await Adopt.findOne({
      _id: id,
      user: userId,
    });
    if (!foundAdoption) throw new Error("Doesn't exist this adoption request");
    if (foundAdoption.status === "pending") {
      let deletedRequest = await Adopt.findByIdAndDelete(id);
      if (!deletedRequest)
        throw new Error("Couldn't delete this adoption request");
      res.json({
        success: true,
        message: `The adoption request ${id} was successfully deleted`,
      });
    } else {
      res.json({
        success: false,
        message: "You can't delete this adoption request",
      });
    }
  } catch (error) {
    console.log(error);
    res.json({ error: error.message });
  }
};
module.exports = { deleteRequest };
