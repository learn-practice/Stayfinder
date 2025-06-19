const express = require("express");
const {
  bookingList,
  currentBookingList,
  cancelBooking,
} = require("../controller/booking");
const authProtect = require("../middlewares/authProtect");
const router = express.Router();

//book listing

router.post("/", authProtect, bookingList);
//view current user booking

router.get("/bookinglist", authProtect, currentBookingList);
//cancel booking

router.put("/:id/cancel", authProtect, cancelBooking);

module.exports = router;
