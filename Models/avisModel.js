const mongoose = require("mongoose")

const avisSchema = new mongoose.Schema({
    message : {type : String , required: [true, "message is required"]}
  });
  
  const avisModel = mongoose.model("avis", avisSchema);
  module.exports = avisModel;