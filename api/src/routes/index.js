const { Router } = require("express");
const users = require("./users");
const animals = require("./animal");
const favorite = require("./favorite");
const adopt = require("./adopt");

const router = Router();

router.use("/", users);
router.use("/", animals);
router.use("/", favorite);
router.use("/", adopt);

module.exports = router;
