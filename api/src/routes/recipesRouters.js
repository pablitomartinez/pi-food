// recipesRouter.js
const { Router } = require("express");
const multer = require("multer"); // Importa Multer
const router = Router();
const path = require("path");

const { validate } = require("../middlewares/validate");

const {
  getRecipesApiHandler,
  getRecipeByIdHandler,
  createRecipeHandler,
} = require("../handlers/recipesHandler");

// Configuración de multer para almacenar archivos en el directorio 'uploads'
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../uploads")); // Ruta relativa correcta para 'uploads'
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

// Ajusta la ruta para incluir el middleware 'upload.single('image')'
router.get("/", getRecipesApiHandler);
router.get("/:id", getRecipeByIdHandler);
router.post("/", upload.single("image"), validate, createRecipeHandler);

module.exports = router;
