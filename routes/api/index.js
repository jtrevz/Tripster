const router = require("express").Router();
const airlineRoutes = require("./airlines");
const tripRoutes = require("./trips");

// Airline routes
router.use("/airlines", airlineRoutes);
// Trip routes
router.use("/trips", tripRoutes)

module.exports = router;
