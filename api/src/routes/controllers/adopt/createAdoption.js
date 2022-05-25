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
        if (
          element.adoptionCode === adoptionCode &&
          element.status === "pending"
        )
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
      success: `the ${animal} has been created successfully`,
      data: newAdoption,
    });
  } catch (error) {
    console.log(error);
    res.json({ error: error.message });
  }

  /*
  Animal.findById(animal)
    .then((result) => {
      if (result.status === true) {
        res.json({ message: "This animal is already adopted" });
      }
    })
    .catch((error) => {
      console.log(error);
      res.json({ error: "This animal doesn't exist" });
    });

  Adopt.find({ user: decodedToken.id })
    .then((result) => {
      if (result.length > 0 && result[0].status === "pending") {
        res.json({ message: "You have already sent this request " });
      } else {
        let newAdoption = new Adopt({
          date,
          status: "pending",
          adoptionCode,
          user: decodedToken.id,
          rescuer,
          animal,
        });

        newAdoption
          .save()
          .then((resultForCreateAdoption) => {
            if (resultForCreateAdoption) {
              res.json({
                success: `the ${animal} has been created successfully`,
                data: resultForCreateAdoption,
              });
            }
          })
          .catch((error) => {
            console.log(error);
            res.json({ error: "Couldn't create this adoption" });
          });
      }
    })
    .catch((error) => {
      console.log(error);
      res.json({ error: "Error trying to find this request" });
    });
    */
};

module.exports = { createAdoption };
