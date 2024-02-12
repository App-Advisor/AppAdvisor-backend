const {request , response } = require ("express")
const categoriesModel = require("../Models/categoriesModel")

const getManyCategories= async(request , response) =>{
    let result = await categoriesModel.find()
    console.log(result) 
    response.send(result)
}

const getByIdCategories = async(request , response)=>{
    let result = await categoriesModel.findById(request.params.id)
    console.log(result)
    response.send(result)
}

const getBymailCategories = async(request , response ) =>{
    let result = await categoriesModel.findOne({ email : request.params.email})
    console.log(result)
    response.send(result)
}

const postCategories = async(request , response) =>{
    const input = request.body ; 
    const Categories = new categoriesModel(input) ; 
    Categories.save ((error , savedCategories) => {
        if (error) {
            return response.status(500).json({error : error.message});
        }
        response.status(201).send(savedCategories)
    });
}

const putManyCategories = async(request , response ) =>{
    const { ids, input } = request.body;
    const result = await categoriesModel.updateMany({ _id: { $in: ids } }, input);
    response.send(result);
}

const putCategoriesById = async (request , response) =>{
    input = request.body 
    let result = await categoriesModel.findByIdAndUpdate (request.params.id , input , {new : true}) ; 
    response.send(result )
}

const deleteManyCategories = async (request , response) =>{
    const input = request.body
    let result= await categoriesModel.deleteMany(input)
    response.send(result)
}

const deleteByIdCategories= async (request , response) =>{
    let result=await categoriesModel.findByIdAndDelete(request.params.id)
    response.send(result)
}

let Categories ={
    getByIdCategories,
    getBymailCategories,
    getManyCategories,
    postCategories,
    putManyCategories,
    putCategoriesById,
    deleteByIdCategories,
    deleteManyCategories
}

module.exports = Categories