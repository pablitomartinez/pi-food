const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const recipesRouter = require('./recipesRouters.js');
const dietsRouter = require('./dietsRouter.js');

const router = Router();

// Manejar la ruta raíz "/"
router.get('/', (req, res) => {
  res.send('¡Bienvenido a la API de Food! desde el enrutador');
});

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/recipes',recipesRouter);
router.use('/diets',dietsRouter);

module.exports = router;
