const Adopt = require("../../../models/adopt");
const Animal = require("../../../models/animal");

const createAdoption = async (req, res) => {
  const { userId } = req.user;
  const { date, adoptionCode, rescuer, animal } = req.body;

  try {
    let foundAnimal = await Animal.findById(animal);
    if (!foundAnimal) throw new Error("This animal doesn't exist");
    if (foundAnimal.adoptedStatus === true)
      throw new Error("This animal is already adopted");
    let foundAdoption = await Adopt.find({ user: userId });
    if (foundAdoption.length > 0) {
      foundAdoption.forEach((element) => {
        if (element.animal === animal && element.status === "pending")
          throw new Error("You have already sent this request ");
      });
    }
    let newAdoption = await Adopt.create({
      date,
      status: "pending",
      adoptionCode,
      user: userId,
      rescuer,
      animal,
    });
    res.json({
      success: true,
      data: newAdoption,
    });
  } catch (error) {
    console.log(error);
    res.json({ success: false, error: error.message });
  }
};

module.exports = { createAdoption };
