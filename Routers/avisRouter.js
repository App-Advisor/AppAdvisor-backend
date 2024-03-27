const express = require("express") ; 
const router = express.Router() ; 
const avis = require("../Controllers/avisController")
const verifyToken = require("../middleware/authJwt");

router.get("/" , avis.getManyAvis); 
router.get("/:id" , avis.getByIdAvis);
router.get("/outil/:id" , avis.getAvisByOutilId);
router.post("/" ,  verifyToken.verifyToken , avis.postAvis); 
router.put("/" , avis.putManyAvis);
router.put("/:id" , avis.putAvisById); 
router.delete("/" , avis.deleteManyAvis); 
router.delete("/:id" , avis.deleteByIdAvis);

module.exports = router ; 