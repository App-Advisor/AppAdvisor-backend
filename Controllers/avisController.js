const avisModel = require("../Models/Avis");

const getManyAvis = async (request, response) => {
    const result = await avisModel.find();
    console.log(result);
    response.send(result);
}

const getByIdAvis = async (request, response) => {
    const result = await avisModel.findById(request.params.id);
    console.log(result);
    response.send(result);
}

const postAvis = async (request, response) => {
    try {
        const input = request.body;
        const avis = new avisModel(input);
        const savedAvis = await avis.save();
        response.status(201).send(savedAvis);
    } catch (error) {
        response.status(500).json({ error: error.message });
    }
}

const putManyAvis = async (request, response) => {
    const { ids, input } = request.body;
    const result = await avisModel.updateMany({ _id: { $in: ids } }, input);
    response.send(result);
}

const putAvisById = async (request, response) => {
    const input = request.body;
    const result = await avisModel.findByIdAndUpdate(request.params.id, input, { new: true });
    response.send(result);
}

const deleteManyAvis = async (request, response) => {
    const input = request.body;
    const result = await avisModel.deleteMany(input);
    response.send(result);
}

const deleteByIdAvis = async (request, response) => {
    const result = await avisModel.findByIdAndDelete(request.params.id);
    response.send(result);
}

let avis = {
    getManyAvis,
    getByIdAvis,
    postAvis,
    putManyAvis,
    putAvisById,
    deleteManyAvis,
    deleteByIdAvis
};

module.exports = avis;
