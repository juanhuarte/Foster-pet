const User = require("../../../models/user");
const Animal = require("../../../models/animal");
const { authorizationToken } = require("../authorization/authorization");

const deleteUser = async (req, res) => {
  const decodedToken = authorizationToken(req, res);
  try {
    const userDeleted = await User.findByIdAndDelete(decodedToken.id);
    if (userDeleted) {
      await Animal.deleteMany({ user: decodedToken.id });
      res.json({
        message: `The User ${decodedToken.mail} was deleted successfully`,
      });
    } else {
      res.json({
        message: "This User doesn't exist",
      });
    }
  } catch (error) {
    throw new Error("Error trying to delete this User");
  }
};

module.exports = { deleteUser };
