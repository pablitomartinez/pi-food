//exporto funciones controladoras.. controllers
const {createRecipe, getRecipeById, searchRecipeByName, getAllRecipes} = require('../controllers/recipesControllers')

const Recipe = require('../models/Recipe')

// si busca por name searchRecipeByName
// si no, trae todas las recetas
//! busqueda inexacta con Op.iLike y un filter-includes
const getAllRecipesOrByName = async (req,res) => {    
    const {name} = req.query

    try {
        const recipes = name 
        ? await searchRecipeByName(name) 
        : await getAllRecipes();
        
        res.status(200).send(recipes);
    } catch (error) {
        res.status(400).send({error: error.message})
    }
}




const createRecipeHandler = async (req,res) => {
    const { 
        name, 
        summary, 
        healthScore, 
        stepByStep,
        image,
        diets
    } = req.body
    
    try {
        const newRecipe = await createRecipe(name,summary, healthScore, stepByStep, image, diets)
        res.status(201).json(newRecipe)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
    // try {
    //     const newRecipe = await createRecipe({ 
    //         name, 
    //         summary, 
    //         healthScore, 
    //         stepByStep, 
    //         image,            
    //         diets 
    //         })
            
    //         res.status(201).json(newRecipe)
    //         console.log('NUEVA RECETA handler -->',newRecipe);
            
    //     } catch (error) {
    //         console.log(error);
    //         res.status(400).json({error: error.message})
    // }
}

const getDbRecipesHandler = (req,res) => {
    res.status(200).send('traigo las recipes de la BD')
}

// id---> númericos & alfanúmericos  
// id---> puede llegar in ID inexistente
const getRecipeByIdHandler = async (req,res) => {
    const {id} = req.params;
    
    const source = isNaN(id) ? 'bdd' : 'api';
    
    try {
        const recipe = await getRecipeById(id, source);
        res.status(200).send(recipe);
    } catch (error) {
        res.status(400).json({error: error.message});
        
    }
}
module.exports = {
    getAllRecipesOrByName, 
    getDbRecipesHandler, 
    getRecipeByIdHandler, 
    createRecipeHandler
}