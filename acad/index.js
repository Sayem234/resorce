// index.js
const express = require("express");
const path = require("path");
const app = express();

// Serve static PDF and other files from "resources" folder
app.use("/resources", express.static(path.join(__dirname, "resources")));

// Serve the resources.json file at /api/resources
app.get("/api/resources", (req, res) => {
  res.sendFile(path.join(__dirname, "resources.json"));
});

// Serve the subjects.json file at /api/subjects
app.get("/api/subjects", (req, res) => {
  res.sendFile(path.join(__dirname, "subjects.json"));
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});
