


const express = require("express");
const connectDB = require("./db");

const app = express();
const blogRoutes = require("./routes/blogRoutes");
app.use("/api", blogRoutes);
// Middleware
app.use(express.json());

// Connect to MongoDB
connectDB();

// Simple test route
app.get("/", (req, res) => {
  res.send("Hello Blog App 🚀");
});

// Start server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));