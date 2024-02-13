const mongoose = require("mongoose")

const categoriesSchema = new mongoose.Schema({
    nom : {type : String , required : [ true , "nom est required "]} ,
    id : {type : number , required : [true , "id is required "]} , 
    outils : { type : String , required : [true , "outil est required"]} ,
    imageURL: { type: String,    required: true },
    imagePublicId: { type: String }

  });
  
  const categoriesModel = mongoose.model("categorie", categoriesSchema);
  module.exports = categoriesModel;