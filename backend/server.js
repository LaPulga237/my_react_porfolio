const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const statsRoutes = require("./routes/project");
require("dotenv").config()


const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  
})
.then(() => console.log("✅ Connected to MongoDB"))
.catch(err => console.error(err));

// Use stats routes
app.use("/stats", statsRoutes);

const projectRoutes = require("./routes/project");
app.use("/projects", projectRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));
