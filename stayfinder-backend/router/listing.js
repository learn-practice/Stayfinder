const express = require("express");
const {
  listingAllData,
  listingDataById,
  addListingData,
  updateListing,
  deleteListing,
} = require("../controller/listing");

const authProtect = require("../middlewares/authProtect");
const isHost = require("../middlewares/isHost");
const isListingOwner = require("../middlewares/isListingOwner");

const router = express.Router();

// Public Routes
router.get("/", listingAllData);
router.get("/:id", listingDataById);

// Protected Routes (Hosts only)
router.post("/", authProtect, isHost, addListingData);
router.put("/:id", authProtect, isHost, isListingOwner, updateListing);
router.delete("/:id", authProtect, isHost, isListingOwner, deleteListing);

module.exports = router;
