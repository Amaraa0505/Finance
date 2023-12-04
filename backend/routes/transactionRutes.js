const { Router } = require("express");
const {
  addTransaction,
  getTransaction,
} = require("../controller/categoryController");

const router = Router();

router.route("/transaction").get(getTransaction);
router.route("./transaction").post(addTransaction);

module.exports = router;
