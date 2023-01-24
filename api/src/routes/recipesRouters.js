const {Router} = require('express');
const router = Router();

const { getRecipesApiHandler, getDbRecipesHandler, getRecipeByIdHandler, createRecipeHandler } = require('../handlers/recipesHandler')

router.get('/', getRecipesApiHandler);

router.get('/:id', getRecipeByIdHandler);

router.post('/', createRecipeHandler);

module.exports = router;

