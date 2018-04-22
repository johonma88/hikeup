const router = require("express").Router();
const eventRoutes = require("./events");
const mountainsRoutes = require("./mountains");
const mtsinfoRoutes = require("./mtsinfo");

// mountain routes
router.use("/events", eventRoutes);
router.use("/mountains", mountainsRoutes);
router.use("/mtsinfo", mtsinfoRoutes);

module.exports = router;
