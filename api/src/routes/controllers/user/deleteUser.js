const User = require("../../../models/user");
const Animal = require("../../../models/animal");

const deleteUser = async (req, res) => {
  const { userId, mail } = req.user;
  try {
    const userDeleted = await User.findByIdAndDelete(userId);
    if (userDeleted) {
      await Animal.deleteMany({ user: userId });
      res.json({
        success: true,
        message: `The User ${mail} was deleted successfully`,
      });
    } else {
      res.json({
        success: false,
        message: "This User doesn't exist",
      });
    }
  } catch (error) {
    throw new Error("Error trying to delete this User");
  }
};

module.exports = { deleteUser };
