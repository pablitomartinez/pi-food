const {Router} = require('express');
const router = Router();

const { getRecipesApi, getDbRecipes, getRecipeById, createRecipe } = require('../handlers/recipesHandler')

router.get('/', getRecipesApi);

router.get('/:id', getRecipeById);

router.post('/', createRecipe);

module.exports = router;

