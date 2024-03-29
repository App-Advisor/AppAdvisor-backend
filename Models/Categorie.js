const mongoose = require("mongoose")
const Outil = require("./Outil")

const categoriesSchema = new mongoose.Schema({
    nom : {type : String , required : [ true , "nom est required "]} ,
    imageURL: { type: String, required: true },
    outils : {type : mongoose.Schema.Types.ObjectId , ref : "Outil"}
  }, { versionKey: false });
  
  const Categorie = mongoose.model("Categorie", categoriesSchema);
  module.exports = Categorie;