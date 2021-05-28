const router = require("express").Router();
const booksController = require("../../controllers/airlinesController");

// Matches with "/api/books"
router.route("/")
  .get(airlinesController.findAll)

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(airlinesController.findById)

module.exports = router;