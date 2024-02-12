const mongoose = require("mongoose");

const outilSchema = new mongoose.Schema({
  name : { type: String, required: [true, "name is required"] },
  categories: { type: String, required: [true, "tel is required"] },
  imageURL: { type: String, required: true },
  imagePublicId: { type: String }
  
});

const outilModel = mongoose.model("outil", outilSchema);
module.exports = outilModel;