const mongoose = require("mongoose");
const Categorie = require("./Categorie");

const outilSchema = new mongoose.Schema({
  name : { type: String, required: [true, "name is required"] },
  id : {type : Number , required : [true , "id is required "]} , 
  categories: { type: String, required: [true, "tel is required"] },
  imageURL: { type: String, required: true },
  categories : {type : mongoose.Schema.Types.ObjectId , ref : "Categorie", required : [true , "categorie is required "]}
});

const Outil = mongoose.model("Outil", outilSchema);
module.exports = Outil;