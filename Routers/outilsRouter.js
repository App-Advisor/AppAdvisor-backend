const express = require("express");
const router = express.Router();
const outils = require("../Controllers/outilsController");

router.get("/" , outils.getManyOutils);
router.get("/:id" , outils.getByIdOutils); 
router.post("/" , outils.postOutils); 
router.put("/" , outils.putManyOutils); 
router.put("/:id" , outils.putOutilsById); 
router.delete("/" , outils.deleteManyOutils); 
router.delete("/:id" , outils.deleteByIdOutils);

module.exports = router ;