const { Router } = require("express");
const { createAdoption } = require("./controllers/adopt/createAdoption");
const {
  getAdoptionRequest,
} = require("./controllers/adopt/getAdoptionRequest");
const { answeringRequest } = require("./controllers/adopt/answeringRequest");
const {
  getAdoptionHistory,
} = require("./controllers/adopt/getAdoptionHistory");
const {
  updateAdoptionRequest,
} = require("./controllers/adopt/updateAdoptionRequest");
const { deleteRequest } = require("./controllers/adopt/deleteRequest");
const {
  authorizationToken,
} = require("./controllers/authorization/authorization");

const router = Router();

router.post("/adopt", authorizationToken, createAdoption);
router.get("/adopt/request", authorizationToken, getAdoptionRequest);
router.put("/adopt/request/:id", authorizationToken, answeringRequest);
router.get("/adopt", authorizationToken, getAdoptionHistory);
router.put("/adopt/:id", authorizationToken, updateAdoptionRequest);
router.delete("/adopt/:id", authorizationToken, deleteRequest);

module.exports = router;
