const { Router } = require("express");
const { upload } = require("../controller/imageController");
const { imageUpload } = require("../utils/upload");

const router = Router();

router.route("/upload").post(imageUpload.single("space"), upload);

module.exports = router;
