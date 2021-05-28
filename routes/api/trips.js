const router = require("express").Router();
const booksController = require("../../controllers/tripsController");

// Matches with "/api/trips"
router.route("/")
  .get(tripsController.findAll)
  .post(tripsController.create);

// Matches with "/api/trips/:id"
router
  .route("/:id")
  .get(tripsController.findById)
  .put(tripsController.update)
  .delete(tripController.remove);



module.exports = router;