// middleware/isHost.js

const isHost = (req, res, next) => {
  if (req.user && req.user.isHost) {
    next(); 
  } else {
    res
      .status(403)
      .json({ message: "Access denied: Only hosts can perform this action." });
  }
};

module.exports = isHost;
