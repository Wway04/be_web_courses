const express = require("express");
const router = express.Router();
const coursesController = require("../controllers/Courses.controller.js");

router.get("/", coursesController.index);
router.post("/store", coursesController.store);
router.patch("/:id", coursesController.update);
router.delete("/:id", coursesController.delete);
router.delete("/force-delete/:id", coursesController.forceDelete);

module.exports = router;
