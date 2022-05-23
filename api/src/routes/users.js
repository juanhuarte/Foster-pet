const { Router } = require("express");
const { createUser } = require("./controllers/user/createUser");
const { updateUser } = require("./controllers/user/updateUser");
const { deleteUser } = require("./controllers/user/deleteUser");
const { login } = require("./controllers/user/login");
const { updatePassword } = require("./controllers/user/updatePassword");

const router = Router();

router.post("/user", createUser);
router.get("/user", login);
router.put("/user", updateUser);
router.put("/user/password", updatePassword);
router.delete("/user", deleteUser);

module.exports = router;
