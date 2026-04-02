const express = require("express");
const router = express.Router();
const Project = require("../models/project");
const Client = require("../models/client");


router.get("/", async (req, res) => {
  try {
    const projectsCompleted = await Project.countDocuments();
    const happyClients = await Client.countDocuments();

    
    const startYear = 2023; 
    const yearsOfExperience = new Date().getFullYear() - startYear;

    res.json({
      yearsOfExperience,
      projectsCompleted,
      happyClients
    });
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
