const {Router} = require('express');
const router = Router();

const { validate } = require('../middlewares/validate');

const { getRecipesApiHandler, getDbRecipesHandler, getRecipeByIdHandler, createRecipeHandler } = require('../handlers/recipesHandler')


router.get('/', getRecipesApiHandler);

router.get('/:id', getRecipeByIdHandler);

router.post('/', validate, createRecipeHandler);

module.exports = router;

