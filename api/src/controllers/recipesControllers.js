// funciones que si interactuan con el modelo
const { Recipe } = require('../db');
const axios = require("axios");
const {apiKey} = process.env


// ? FUNCION NORMALIZADORA
const cleanArray = (arr)=>{
    // console.log(arr);
    const clean = arr.map(elem =>{
        return{
            id: elem.id,
            name: elem.title,
            summary: elem.summary,
            healthScore: elem.healthScore,
            stepByStep: elem.analyzedInstructions[0]?.steps.map(e => {
                return {
                    number: e.number,
                    step: e.step
                }
            }),
            // name: elem.name,
            // email: elem.email,
            // phone: elem.phone,
            created: false

        }
    })
    return clean
}

// TRAE RECETAS DE LA API
const getApiRecipes = async ()=>{
    const apiInfo = (await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&addRecipeInformation=true&number=100`)).data.results;

    apiInfo.map(e => {
        return{
            id: e.id,
            image: e.image,
            name: e.title,
            dietTypes: e.diets,
            summary: e.summary,
            score: e.spoonacularScore,
            healthScore: e.healthScore,
            dishTypes: e.dishTypes,
            stepByStep: e.analyzedInstructions[0]?.steps.map(e => {
                return {
                    number: e.number,
                    step: e.step
                }
            })
        }
    })
    return apiInfo
}


// TRAE TODO
//      API 
//      BD
const getAllRecipes = async ()=>{
    // BD
    const recipesDb = await Recipe.findAll();
    // API (crudo)
    const recipesApiRaw = await getApiRecipes()
    // console.log('RECETAS --->',recipesApiRaw);
       
    // ? FUNCION NORMALIZADORA
    const recipesApi = cleanArray(recipesApiRaw)
    // console.log(recipesApi);

    const allRecipes = [...recipesDb, ...recipesApi]

    return allRecipes
};

// CREA RECETA EN BD
const createRecipe = async (name, summary, healthScore, stepByStep )=>{

    const newRecipe = await Recipe.create({name, summary, healthScore, stepByStep});

    

    return newRecipe;
}

// BUSCA POR ID
const getRecipeById = async (id, source)=>{
    // const recipesInArray = []
    
    const recipe = source === 'api' 
    ? (await axios.get (`https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}`)).data

    : await Recipe.findByPk(id);



    // const recipeClean = cleanArray(recipe)
    console.log('RECETAS POR ID',recipe);
    return recipe
}


// busca por NAME
const searchRecipeByName = async (name)=>{
    const dataBaseRecipes = await Recipe.findAll({
        where:{name}
    })

    const recipesApiRaw = await getAllRecipes();
    const recipesByName = recipesApiRaw.filter(e => e.name === name)
    console.log('RECIPES BY NAME --->',recipesByName);
        // ? FUNCION NORMALIZADORA
    // const recipesApi = cleanArray(recipesApiRaw)

    // const filteredApi = recipesApi.filter((recipe)=> recipe.name === name)

    // BASE DE DATOS & FILTER API
    return [...dataBaseRecipes, ...recipesByName]
};



module.exports = {
    createRecipe,
    getRecipeById,
    searchRecipeByName, 
    getAllRecipes,
    
}