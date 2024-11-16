const jwt = require("jsonwebtoken");

const jwtValidator = (req, res, next) => {
  const authHeader = req.headers.authorization;

  // Check if the Authorization header exists
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ error: "Unauthorized: No token provided" });
  }

  // Extract the token
  const token = authHeader.split(" ")[1];

  try {
    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Attach user info to the request object for use in the route
    req.user = decoded;

    next(); // Proceed to the next middleware or route
  } catch (err) {
    console.log(err);
    return res.status(401).json({ error: "Unauthorized: Invalid token" });
  }
};

module.exports = jwtValidator;
