const {Router} = require ("express");
const {addCategory} = require ("../controller/categoryController");
const router = Router();
router.route("/addCategory").post(addCategory);
module.exports = router;