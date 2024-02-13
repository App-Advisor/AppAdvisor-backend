const mongoose = require("mongoose")

const avisSchema = new mongoose.Schema({
    message : {type : String , required: [true, "message is required"]},
    id : {type : number , required : [true , "id is required "]} , 

  });
  
  const avisModel = mongoose.model("outil", avisSchema);
  module.exports = avisModel;