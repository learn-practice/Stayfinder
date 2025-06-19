// middleware/isListingOwner.js

const Listing = require("../models/Listing");

const isListingOwner = async (req, res, next) => {
  try {
    const listing = await Listing.findById(req.params.id);
    if (!listing) {
      return res.status(404).json({ message: "Listing not found." });
    }

    if (listing.owner.toString() !== req.user._id.toString()) {
      return res
        .status(403)
        .json({ message: "Access denied: You do not own this listing." });
    }

    next(); // user is owner, allow action
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

module.exports = isListingOwner;
