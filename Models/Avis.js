const mongoose = require("mongoose")
const Outil = require("./Outil")
const UserModel = require("./UserModel")

const avisSchema = new mongoose.Schema({
    message : {type : String , required: [true, "message is required"]},
    note : {type : Number , required : [true , "note is required "]} ,
    difficulte : {type : Number , required : [true , "difficulte is required "]} ,
    performance : {type : Number , required : [true , "performance is required "]} ,
    flexibilite : {type : Number , required : [true , "flexibilite is required "]},
    outils : {type : mongoose.Schema.Types.ObjectId , ref : "Outil"},
    user : {type : mongoose.Schema.Types.ObjectId , ref : "UserModel"}
  }, { versionKey: false });
  
  const Avis = mongoose.model("Avis", avisSchema);
  module.exports = Avis;