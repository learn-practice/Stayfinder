const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
require("dotenv").config();
const userRouter = require("./router/user");
const userListing = require('./router/listing');
const userBooking = require('./router/booking')
const app = express();
connectDB();

app.use(cors());
app.use(express.json());

// Example route
app.get("/", (req, res) => {
  res.send("API is running...");
});
app.use("/auth", userRouter);
app.use('/listing',userListing);
app.use('/booking',userBooking);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
