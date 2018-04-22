const router = require("express").Router();
const eventsController = require("../../controllers/eventsController");

// Matches with "/api/mountains"
router.route("/events")
  .get(eventsController.findAll)
  .post(eventsController.create);

// Matches with "/api/mountains/:id"
router
  .route("/events/:id")
  .get(eventsController.findById)
  .put(eventsController.update)
  .delete(eventsController.remove);

module.exports = router;
