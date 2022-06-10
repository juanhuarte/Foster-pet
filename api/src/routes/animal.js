const { Router } = require("express");
const { createAnimal } = require("./controllers/animal/createAnimal");
const { updateAnimal } = require("./controllers/animal/updateAnimal");
const { getAnimals } = require("./controllers/animal/getAnimals");
const { deleteAnimal } = require("./controllers/animal/deleteAnimal");
const { getAllAnimals } = require("./controllers/animal/getAllAnimals");
const {
  authorizationToken,
} = require("./controllers/authorization/authorization");

const router = Router();

router.post("/animal", authorizationToken, createAnimal);
router.put("/animal/:id", authorizationToken, updateAnimal);
router.delete("/animal/:id", authorizationToken, deleteAnimal);
router.get("/animal", getAnimals);
router.get("/animals", getAllAnimals);

module.exports = router;
