const {Router} = require('express');

const router = Router();

const { validate } = require('../middlewares/validate');

const { getAllRecipesOrByName, getDbRecipesHandler, getRecipeByIdHandler, createRecipeHandler } = require('../handlers/recipesHandler')


router.get('/', getAllRecipesOrByName);

router.get('/:id', getRecipeByIdHandler);

router.post('/', createRecipeHandler);

module.exports = router;

