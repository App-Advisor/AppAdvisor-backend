const {request , response } = require ("express")
const avisModel = require("../Models/avisModel")

const getManyAvis= async(request , response) =>{
    let result = await avisModel.find()
    console.log(result) 
    response.send(result)
}

const getByIdAvis = async(request , response)=>{
    let result = await avisModel.findById(request.params.id)
    console.log(result)
    response.send(result)
}

const getBymailAvis = async(request , response ) =>{
    let result = await avisModel.findOne({ email : request.params.email})
    console.log(result)
    response.send(result)
}

const postAvis = async(request , response) =>{
    const input = request.body ; 
    const avis = new avisModel(input) ; 
    avis.save ((error , savedavis) => {
        if (error) {
            return response.status(500).json({error : error.message});
        }
        response.status(201).send(savedavis)
    });
}

const putManyAvis = async(request , response ) =>{
    const { ids, input } = request.body;
    const result = await avisModel.updateMany({ _id: { $in: ids } }, input);
    response.send(result);
}

const putAvisById = async (request , response) =>{
    input = request.body 
    let result = await avisModel.findByIdAndUpdate (request.params.id , input , {new : true}) ; 
    response.send(result )
}

const deleteManyAvis = async (request , response) =>{
    const input = request.body
    let result= await avisModel.deleteMany(input)
    response.send(result)
}

const deleteByIdAvis= async (request , response) =>{
    let result=await avisModel.findByIdAndDelete(request.params.id)
    response.send(result)
}

let Avis ={
    getByIdAvis,
    getBymailAvis,
    getManyAvis,
    postAvis,
    putManyAvis,
    putAvisById,
    deleteByIdAvis,
    deleteManyAvis
}

module.exports = Avis;