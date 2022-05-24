const Animal = require("../../../models/animal");
const { authorizationToken } = require("../authorization/authorization");

const createAnimal = (req, res) => {
  const decodedToken = authorizationToken(req, res);
  const { type, gender, age, size, description, location } = req.body;

  Animal.find({
    description,
    user: decodedToken.id,
  })
    .then((result) => {
      const alreadyExist = result.find(
        (element) => element.user.toString() === decodedToken.id
      );
      if (alreadyExist)
        res.json({ message: "This animal was already published" });
    })
    .catch((error) => {
      console.log(error);
    });

  let newAnimal = new Animal({
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
    user: decodedToken.id,
  });

  newAnimal
    .save()
    .then((result) => {
      if (result)
        res.json({
          success: `the ${type} has been created successfully`,
          data: result,
        });
    })
    .catch((error) => {
      console.log(error);
      res.json({ error: "Couldn't create this animal" });
    });
};

module.exports = { createAnimal };
