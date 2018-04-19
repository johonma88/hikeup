const router = require("express").Router();
const mtsinfoController = require("../../controllers/mtsinfoController");

// Matches with "/api/mountains"
router.route("/")
  .get(mtsinfoController.findAll)
  .post(mtsinfoController.create);

// Matches with "/api/mountains/:id"
router
  .route("/:id")
  .get(mtsinfoController.findById)
  .put(mtsinfoController.update)
  .delete(mtsinfoController.remove);

module.exports = router;
