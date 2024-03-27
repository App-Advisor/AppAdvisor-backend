const categoriesModel = require("../Models/Categorie");

const getManyCategories = async (request, response) => {
    try {
        const result = await categoriesModel.find().populate('outils', 'name');
        response.send(result);
    } catch (error) {
        console.log(error);
        response.status(500).json({ error: error.message });
    }
}

const getByIdCategories = async (request, response) => {  
    try {
        const result = await categoriesModel.findById(request.params.id).populate('outils', 'name');
        console.log(result);
        response.send(result);
    } catch (error) {
        console.log(error);
        response.status(500).json({ error: error.message });
    }
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

const putCategoriesById = async (request, response) => {
    const input = request.body;
    const result = await categoriesModel.findByIdAndUpdate(request.params.id, input, { new: true });
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
    putCategoriesById,
    deleteByIdCategories
};

module.exports = categories;
