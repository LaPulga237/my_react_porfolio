const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  title: String,
  description: String,
  link: String,
  technologies: [String],
  completed: Boolean
}, { collection: "projects" }); // make sure this matches your Atlas collection name

module.exports = mongoose.model("Project", projectSchema);
