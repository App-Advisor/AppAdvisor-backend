const express = require("express");
const router = express.Router();
const user = require("../controllers/userController");
// const Middleware = require("../middleware/test");

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
router.post("/me", Middleware, user.me);

module.exports = router;