const listing = require("../model/listing");
// GET /listings
const listingAllData = async (req, res) => {
  try {
    const listings = await listing.find();
    return res.status(201).json({ data: listings });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "server not found", error: error.message });
  }
};
// GET /listings/:id
const listingDataById = async (req, res) => {
  try {
    const Id = req.params.id;
    const data = await listing.findById(Id);
    if (!data) {
      return res.status(404).json({ message: "listing does not found" });
    }
    return res.status(201).json({ data: data });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "server not found", error: error.message });
  }
};
// POST /listings (auth required)
const addListingData = async (req, res) => {
  try {
    const {
      title,
      description,
      address,
      pricePerNight,
      images,
      guests,
      bedrooms,
      bathrooms,
      amenities,
      availableDates,
    } = req.body;

    const newListing = await listing.create({
      title,
      description,
      address,
      pricePerNight,
      images,
      guests,
      bedrooms,
      bathrooms,
      amenities,
      availableDates,
      host: req.user._id,
    });

    return res
      .status(201)
      .json({ message: "data saved successfully", data: newListing });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "server not found", error: error.message });
  }
};

// PUT /listings/:id
const updateListing = async (req, res) => {
  try {
    // testing
    // console.log("updateListing function called");

    const listingId = req.params.id;
    const updatedData = req.body;
    // testing
    // console.log("listing", listingId);
    // console.log("updatedData", updatedData);
    // console.log("User:", req.user); // check if this is undefined
    const existingListing = await listing.findById(req.params.id);
    // testing
    // console.log("Listing host:", existingListing.host); // should be an ObjectId
    if (existingListing) {
      console.log(existingListing.title);
    }
    if (
      !req.user ||
      req.user._id.toString() !== existingListing.host.toString()
    ) {
      return res
        .status(403)
        .json({ message: "Unauthorized to update this listing" });
    }

    const updatedListing = await listing.findByIdAndUpdate(
      listingId,
      updatedData,
      {
        new: true,
        runValidators: true,
      }
    );

    res.status(200).json({ message: "Listing updated", data: updatedListing });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// DELETE /listings/:id
const deleteListing = async (req, res) => {
  try {
    const Id = req.params.id;
    const deletedListing = await listing.findByIdAndDelete(Id);
    if (!deletedListing) {
      return res.status(404).json({ message: "listing does not found" });
    }
    return res.status(201).json({ message: "listing deleted successfully" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "server not found", error: error.message });
  }
};

module.exports = {
  listingAllData,
  listingDataById,
  addListingData,
  updateListing,
  deleteListing,
};
