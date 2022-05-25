const Animal = require("../../../models/animal");

const createAnimal = async (req, res) => {
  const { userId } = req.user;
  const { type, gender, age, size, description, location } = req.body;

  try {
    let foundAnimal = await Animal.findOne({ description, user: userId });
    if (foundAnimal) {
      const alreadyExist = foundAnimal.find(
        (element) => element.user.toString() === userId
      );
      if (alreadyExist) throw new Error("This animal was already published");
    }
    let newAnimal = await Animal.create({
      type: type.toLowerCase(),
      gender: gender.toLowerCase(),
      age,
      size: size.toLowerCase(),
      description,
      temporaryName: req.body.temporaryName
        ? req.body.temporaryName.toLowerCase()
        : type,
      image: req.body.image
        ? req.body.image
        : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtfVESoo_p1p3ygBd_Jq5oUC9PVHECWAXHuniu577aCaMEy3_k-41VV53fxBT4HPLw9Ks&usqp=CAU",
      location,
      user: userId,
    });
    res.json({
      success: `the ${type} has been created successfully`,
      data: newAnimal,
    });
  } catch (error) {
    console.log(error);
    res.json({ error: error.message });
  }
};

module.exports = { createAnimal };
