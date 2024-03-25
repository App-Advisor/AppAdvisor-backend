const express = require("express");
const router = express.Router();
const user = require("../Controllers/userController");

router.get("/", user.getManyuser);
router.get("/:id", user.getByIduser);
router.get("/getdata/:email", user.getBymailUser);
router.post("/", user.postUser);
router.put("/", user.putManyUser);
router.put("/:id", user.putUserById);
router.delete("/", user.deleteManyuser);
router.delete("/:id", user.deleteByIduser);
router.post("/signup", user.signup);
router.post("/signin", user.signin);
router.post("/me", user.me);

module.exports = router;