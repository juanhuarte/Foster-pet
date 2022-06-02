const { Router } = require("express");
const { createUser } = require("./controllers/user/createUser");
const { updateUser } = require("./controllers/user/updateUser");
const { deleteUser } = require("./controllers/user/deleteUser");
const { login } = require("./controllers/user/login");
const { updatePassword } = require("./controllers/user/updatePassword");
const {
  authorizationToken,
} = require("./controllers/authorization/authorization");
const router = Router();

router.post("/user", createUser);
router.get("/user", login);
router.put("/user", authorizationToken, updateUser);
router.put("/user/password", authorizationToken, updatePassword);
router.delete("/user", authorizationToken, deleteUser);
router.get("/user/verify", authorizationToken, (req, res) => {
  res.json({
    success: true,
    data: {
      id: req.user.id,
      mail: req.user.mail,
    },
  });
});

module.exports = router;
