const express = require("express");
const router = express.Router();
const adminController = require("../controllers/Admin.controller.js");

router.get("/", adminController.index);

module.exports = router;
