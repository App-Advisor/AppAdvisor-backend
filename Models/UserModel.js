const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: [true, "name is required"] },
  email: { type: String, required: [true, "email is required"] },
  password: { type: String, required: [true, "password is required"] },
  Admin : {type : Boolean , required : [true , "user is an admin "] , default : false} , 
}, { versionKey: false });

const UserModel = mongoose.model("UserModel", userSchema);
module.exports = UserModel;