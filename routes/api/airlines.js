const router = require("express").Router();
const airlinesController = require("../../controllers/airlinesController");

// Matches with "/api/airlines"
router.route("/")
  .get(airlinesController.findAll)

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(airlinesController.findById)

module.exports = router;