const express = require("express");
const router = express.Router();

const chickenController = require("../controllers/chicken.js");

router.get("/", chickenController.getChickens);
router.post("/", chickenController.addChicken);

module.exports = router;
