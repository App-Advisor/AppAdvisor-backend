const express = require("express")
const router = expressRouter() ;
const categories = require ("../Controllers/categoriesController")

router.get("/" , categories.getManyCategories) ; 
router.get("/:id" , categories.getByIdCategories) ; 
router.get("/getdata/:email" , categories.getBymailCategories) ; 
router.post("/" , categories.postCategories)
router.put("/" , categories.putManyCategories) ; 
router.put("/:id" , categories.putCategoriesById) ; 
router.delete("/" , categories.deleteManyCategories) ; 
router.delete("/:id" , categories.deleteByIdCategories)
module.exports = router ; 