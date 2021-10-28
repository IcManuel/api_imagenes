const { Router } = require("express");
const router = Router();

const { servirImagen } = require("./../controllers/imagen_ctrl");
router.get("/:imagen_id", servirImagen);

module.exports = router;