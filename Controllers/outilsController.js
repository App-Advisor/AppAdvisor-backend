const { request, response } = require("express");
const outilsModel = require("../Models/Outil");

const getManyOutils = async (request, response) => {
    try {
        const result = await outilsModel.find().populate('categories', 'name').populate('avis', 'difficulte performance flexibilite');
        response.send(result);
    } catch (error) {
        console.log(error);
        response.status(500).json({ error: error.message });
    }
}

const getByIdOutils = async (request, response) => {
    try {
        const result = await outilsModel.findById(request.params.id).populate('categories', 'name').populate('avis', 'difficulte performance flexibilite');
        response.send(result);
    } catch (error) {
        console.log(error);
        response.status(500).json({ error: error.message });
    }
}

const postOutils = async (request, response) => {
    try {
        const input = request.body;
        const outil = new outilsModel(input);
        const savedOutil = await outil.save();
        response.status(201).send(savedOutil);
    } catch (error) {
        response.status(500).json({ error: error.message });
    }
}

const putManyOutils = async (request, response) => {
    const { ids, input } = request.body;
    const result = await outilsModel.updateMany({ _id: { $in: ids } }, input);
    response.send(result);
}

const putOutilsById = async (request, response) => {
    const input = request.body;
    const result = await outilsModel.findByIdAndUpdate(request.params.id, input, { new: true });
    response.send(result);
}

const deleteManyOutils = async (request, response) => {
    const input = request.body;
    const result = await outilsModel.deleteMany(input);
    response.send(result);
}

const deleteByIdOutils = async (request, response) => {
    const result = await outilsModel.findByIdAndDelete(request.params.id);
    response.send(result);
}

let outils = {
    getManyOutils,
    getByIdOutils,
    postOutils,
    putManyOutils,
    putOutilsById,
    deleteManyOutils,
    deleteByIdOutils
};

module.exports = outils;
