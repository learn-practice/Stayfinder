const Booking = require("../model/booking");
//book listing
const bookingList = async (req, res) => {
  try {
    const { listingId, checkIn, checkOut, guests, totalPrice, status } =
      req.body;
    const listing = await Listing.findById(listingId);
    if (!listing) {
      return res.status(404).json({ message: "Listing not found" });
    }
    const newBooking = await Booking.create({
      user: req.user._id,
      listing: listing._id,
      checkIn,
      checkOut,
      guests,
      totalPrice,
      status: status || "confirmed",
    });
    return res
      .status(201)
      .json({ message: "Booking succedssfully", data: newBooking });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "server not found", error: error.message });
  }
};
//view current user booking
const currentBookingList = async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.user._id })
      .populate("listing", "title pricePerNight images address")
      .sort({ createdAt: -1 });

    return res.status(200).json({ bookings });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "server not found", error: error.message });
  }
};
//cancel booking
const cancelBooking = async (req, res) => {
  try {
    const bookingId = req.params.id;

    const booking = await Booking.findById(bookingId);

    if (!booking) {
      return res.status(404).json({ message: "Booking not found" });
    }
    if (booking.user.toString() !== req.user._id.toString()) {
      return res
        .status(403)
        .json({ message: "Not authorized to cancel this booking" });
    }
    booking.status = "cancelled";
    await booking.save();

    return res
      .status(200)
      .json({ message: "Booking cancelled successfully", data: booking });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "server not found", error: error.message });
  }
};
module.exports = { bookingList, currentBookingList, cancelBooking };
