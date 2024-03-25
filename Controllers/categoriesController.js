const categoriesModel = require("../Models/Categorie");

const getManyCategories = async (request, response) => {
    const result = await categoriesModel.find();
    console.log(result);
    response.send(result);
}

const getByIdCategories = async (request, response) => {
    const result = await categoriesModel.findById(request.params.id);
    console.log(result);
    response.send(result);
}

const postCategories = async (request, response) => {
    try {
        const input = request.body;
        const category = new categoriesModel(input);
        const savedCategory = await category.save();
        response.status(201).send(savedCategory);
    } catch (error) {
        response.status(500).json({ error: error.message });
    }
}

const putManyCategories = async (request, response) => {
    const { ids, input } = request.body;
    const result = await categoriesModel.updateMany({ _id: { $in: ids } }, input);
    response.send(result);
}

const putCategoriesById = async (request, response) => {
    const input = request.body;
    const result = await categoriesModel.findByIdAndUpdate(request.params.id, input, { new: true });
    response.send(result);
}

const deleteManyCategories = async (request, response) => {
    const input = request.body;
    const result = await categoriesModel.deleteMany(input);
    response.send(result);
}

const deleteByIdCategories = async (request, response) => {
    const result = await categoriesModel.findByIdAndDelete(request.params.id);
    response.send(result);
}

let categories = {
    getManyCategories,
    getByIdCategories,
    postCategories,
    putManyCategories,
    putCategoriesById,
    deleteManyCategories,
    deleteByIdCategories
};

module.exports = categories;
