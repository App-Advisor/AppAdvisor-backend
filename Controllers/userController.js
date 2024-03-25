const { request, response } = require("express");
const userModel = require("../Models/UserModel");
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');

const getManyuser = async (request, response) => {
    const result = await userModel.find();
    console.log(result);
    response.send(result);
}

const getByIduser = async (request, response) => {
    try {
      const result = await userModel.findById(request.params.id);
      if (!result) {
        return response.status(404).send('User not found');
      }
      response.send(result);
    } catch (error) {
      console.error(error);
      response.status(500).send('An error occurred');
    }
};
  

const getBymailUser = async (request, response) => {
    const result = await userModel.findOne({ email: request.params.email });
    response.send(result);
}

const postUser = async (request, response) => {
    try {
        const input = request.body;
        const user = new userModel(input);
        const savedUser = await user.save();
        response.status(201).send(savedUser);
    } catch (error) {
        response.status(500).json({ error: error.message });
    }
}

const putManyUser = async (request, response) => {
    const { ids, input } = request.body;
    const result = await userModel.updateMany({ _id: { $in: ids } }, input);
    response.send(result);
};

const putUserById = async (request, response) => {
    const input = request.body;
    const result = await userModel.findByIdAndUpdate(request.params.id, input, { new: true });
    response.send(result);
}

const deleteManyuser = async (request, response) => {
    const input = request.body;
    const result = await userModel.deleteMany(input);
    response.send(result);
}

const deleteByIduser = async (request, response) => {
    const result = await userModel.findByIdAndDelete(request.params.id);
    response.send(result);
}

const signup = async (request, response) => {
    let input = request.body;
    const userExist = await userModel.findOne({ email: input.email });
    if (userExist) {
        return response.status(400).json({ msg: "Email already used!" });
    }
    const hashedPassword = await bcrypt.hash(input.password, 10);
    input.password = hashedPassword;
    try {
        const newUser = new userModel(input);
        const result = await newUser.save();
        return response.status(201).json(result);
    } catch (error) {
        return response.status(500).json({ error: error.message });
    }
};

const signin = async (request, response) => {
    let input = request.body;
    let userExist = await userModel.findOne({ email: input.email });
    if (!userExist) {
        return response.status(404).json({ msg: "User not found!" });
    }
    const validPass = await bcrypt.compare(input.password, userExist.password);
    if (!validPass) {
        return response.status(400).json({ msg: "Incorrect password!" });
    }
    const token = jwt.sign({ userId: userExist._id }, "TOKEN-CRYPTER", {
        expiresIn: "24h",
    });
    response.cookie("token", token, { httpOnly: true }); 
    return response.status(200).json({
        user: userExist,
        token,
    });
}

async function me(request, response) {
    const user = request.user;
    response.send(user);
}

const userController = {
    getManyuser,
    getByIduser,
    postUser,
    putManyUser,
    putUserById,
    deleteManyuser,
    deleteByIduser,
    getBymailUser,
    signin,
    signup,
    me
};

module.exports = userController;
