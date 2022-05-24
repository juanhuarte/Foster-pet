const { Router } = require("express");
const {
  addFavoriteAnimal,
} = require("./controllers/favorite/addFavoriteAnimal");
const {
  getFavoritesAnimals,
} = require("./controllers/favorite/getFavoritesAnimals");
const {
  deleteFavoriteAnimal,
} = require("./controllers/favorite/deleteFavoriteAnimal");

const router = Router();

router.put("/favorite/:id", addFavoriteAnimal);
router.get("/favorite", getFavoritesAnimals);
router.delete("/favorite/:id", deleteFavoriteAnimal);

module.exports = router;
