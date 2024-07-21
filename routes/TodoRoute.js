const {Router} = require("express");
const { gettodo, updatetodo, savetodo, deletetodo } = require("../controllers/TodoController");
const router = Router();

router.get("/",gettodo)
router.post("/save",savetodo)
router.post("/update",updatetodo)
router.post("/delete",deletetodo)

module.exports = router;       