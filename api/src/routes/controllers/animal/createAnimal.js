const Animal = require("../../../models/animal");
const path = require("path");

const createAnimal = async (req, res) => {
  const { userId } = req.user;
  const { type, gender, age, size, description, location } = req.body;
  const { image } = req.files;
  try {
    let foundAnimal = await Animal.findOne({ description, user: userId });
    if (foundAnimal) {
      const alreadyExist = foundAnimal.find(
        (element) => element.user.toString() === userId
      );
      if (alreadyExist) throw new Error("This animal was already published");
    }
    let newAnimal = new Animal({
      type: type.toLowerCase(),
      gender: gender.toLowerCase(),
      age,
      size: size.toLowerCase(),
      description,
      temporaryName: req.body.temporaryName
        ? req.body.temporaryName.toLowerCase()
        : type,
      location,
      user: userId,
    });
    const extension = image.name.split(".").pop();
    const newFileName = `${newAnimal._id}.${extension}`;
    const fileRoute = path.join(
      __dirname,
      "..",
      "..",
      "..",
      "..",
      "images",
      newFileName
    );

    // newAnimal.image = `http://localhost:3001/${newFileName}`;
    // newAnimal.image = newFileName;
    newAnimal.image = `https://foster-pet.herokuapp.com/${newFileName}`;

    image.mv(fileRoute, async (err) => {
      if (err) throw new Error(err);
      newAnimal = await newAnimal.save();
      res.json({
        success: true,
        data: newAnimal,
      });
    });
    // let newAnimal = await Animal.create({
    //   type: type.toLowerCase(),
    //   gender: gender.toLowerCase(),
    //   age,
    //   size: size.toLowerCase(),
    //   description,
    //   temporaryName: req.body.temporaryName
    //     ? req.body.temporaryName.toLowerCase()
    //     : type,
    //   image: req.body.image
    //     ? req.body.image
    //     : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtfVESoo_p1p3ygBd_Jq5oUC9PVHECWAXHuniu577aCaMEy3_k-41VV53fxBT4HPLw9Ks&usqp=CAU",
    //   location,
    //   user: userId,
    // });
    // res.json({
    //   success: true,
    //   data: newAnimal,
    // });
  } catch (error) {
    console.log(error);
    res.json({ success: false, error: error.message });
  }
};

module.exports = { createAnimal };
