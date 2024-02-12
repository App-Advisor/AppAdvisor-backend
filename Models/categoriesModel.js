const mongoose = require("mongoose")

const categoriesSchema = new mongoose.Schema({
    nom : {type : String , required : [ true , "nom est required "]} ,
    outils : { type : String , required : [true , "outil est required"]} ,
    // Champ pour l'URL de l'image
  imageURL: {    type: String,    required: true  },
  // Champ pour l'ID public de l'image (optionnel, dépend de vos besoins)
  imagePublicId: {    type: String  }

  });
  
  const categoriesModel = mongoose.model("outil", categoriesSchema);
  module.exports = categoriesModel;