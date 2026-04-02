const mongoose = require("mongoose");

const clientSchema = new mongoose.Schema({
  name: String,
  feedback: String,
  satisfied: Boolean
},{ collection: "client" });

module.exports = mongoose.model("client", clientSchema);
