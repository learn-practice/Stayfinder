const jwt = require("jsonwebtoken");
const User = require("../model/user");

const authProtect = async (req, res, next) => {
  let token;

  // Check for token in headers
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1]; // Get token after "Bearer "

      // Verify token
      const decoded = jwt.verify(token, process.env.JWT_TOKEN);

      // Attach user to request (excluding password)
      req.user = await User.findById(decoded.id).select("-password");

      next(); // Continue to next middleware/route handler
    } catch (error) {
      console.error("Token verification failed:", error.message);
      return res.status(401).json({ message: "Not authorized, token failed" });
    }
  }

  if (!token) {
    return res.status(401).json({ message: "Not authorized, no token" });
  }
};

module.exports = authProtect;
