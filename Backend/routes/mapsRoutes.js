const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/authMiddleware");
const mapController = require("../controllers/mapsController");
const { getCoordinates } = require("../controllers/mapsController");
const { query } = require("express-validator");
const { getDistanceTime } = require("../controllers/mapsController");
const { getAutoCompleteSuggestions } = require("../controllers/mapsController");

router.get(
  "/get-coordinates",
  query("address").isString().isLength({ min: 3 }),
  authMiddleware.authUser,
  getCoordinates
);

router.get(
  "/get-dist-time",
  query("origin").isString().isLength({ min: 3 }),
  query("destination").isString().isLength({ min: 3 }),
  authMiddleware.authUser,
  getDistanceTime
);

router.get(
  "/get-suggestions",
  query("input").isString().isLength({ min: 3 }),
  authMiddleware.authUser,
  getAutoCompleteSuggestions
);

module.exports = router;
