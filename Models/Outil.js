const mongoose = require("mongoose");
const Categorie = require("./Categorie");

const outilSchema = new mongoose.Schema({
  name : { type: String, required: [true, "name is required"] }, 
  categories: { type: String, required: [true, "tel is required"] },
  imageURL: { type: String, required: true },
  categories : {type : mongoose.Schema.Types.ObjectId , ref : "Categorie"}
}, { versionKey: false });

const Outil = mongoose.model("Outil", outilSchema);
module.exports = Outil;