const express = resquire("express") ; 
const router = expressRouter() ; 
const avis = require("../Controllers/avisController")

router.get("/" , avis.getManyAvis) ; 
router.get("/:id" , avis.getByIdAvis) ; 
router.get("/getdata/:email" , avis.getBymailAvis) ;
router.post("/" , avis.postAvis) ; 
router.put("/" , avis.putManyAvis);
router.put("/:id" , avis.putAvisById) ; 
router.delete("/" , avis.deleteManyAvis) ; 
router.delete("/:id" , avis.deleteByIdAvis)

module.exports = router ; 