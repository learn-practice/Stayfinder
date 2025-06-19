const express = require("express");
const { registerUser, loginUser } = require("../controller/user");
const router = express.Router();

// registration router
router.post("/register", registerUser);
// login router
router.post("/login", loginUser);

module.exports = router;