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
const {
  authorizationToken,
} = require("./controllers/authorization/authorization");

const router = Router();

router.put("/favorite/:id", authorizationToken, addFavoriteAnimal);
router.get("/favorite", authorizationToken, getFavoritesAnimals);
router.delete("/favorite/:id", authorizationToken, deleteFavoriteAnimal);

module.exports = router;
