const mongoose = require("mongoose");

const outilSchema = new mongoose.Schema({
  name : { type: String, required: [true, "name is required"] },
  id : {type : number , required : [true , "id is required "]} , 

  categories: { type: String, required: [true, "tel is required"] },
  // Champ pour l'URL de l'image
  imageURL: {    type: String,    required: true  },
  // Champ pour l'ID public de l'image (optionnel, dépend de vos besoins)
  imagePublicId: {    type: String  }
  
});

const outilModel = mongoose.model("outil", outilSchema);
module.exports = outilModel;