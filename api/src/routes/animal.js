const { Router } = require("express");
const { createAnimal } = require("./controllers/animal/createAnimal");
const { updateAnimal } = require("./controllers/animal/updateAnimal");
const { getAnimals } = require("./controllers/animal/getAnimals");
const { deleteAnimal } = require("./controllers/animal/deleteAnimal");

const router = Router();

router.post("/animal", createAnimal);
router.put("/animal/:id", updateAnimal);
router.delete("/animal/:id", deleteAnimal);
router.get("/animal", getAnimals);

module.exports = router;
