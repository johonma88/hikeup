const router = require("express").Router();
const mountainsController = require("../../controllers/mountainsController");

// Matches with "/api/mountains"
router.route("/")
  .get(mountainsController.findAll)
  .post(mountainsController.create);

// Matches with "/api/mountains/:id"
router
  .route("/:id")
  .get(mountainsController.findById)
  .put(mountainsController.update)
  .delete(mountainsController.remove);

module.exports = router;
