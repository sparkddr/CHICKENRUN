const express = require("express");
const router = express.Router();

const chickenController = require("../controllers/chicken.js");

router.get("/", chickenController.getChickens);
router.post("/", chickenController.addChicken);
router.get("/:id", chickenController.getOneChicken);
router.delete("/:id", chickenController.deleteChicken);
router.put("/:id", chickenController.modifyChicken);
router.patch("/:id", chickenController.modifyChicken);

router.put("/run/:id", chickenController.runChicken);

module.exports = router;
