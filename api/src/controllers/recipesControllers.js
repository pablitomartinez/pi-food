// funciones que si interactuan con el modelo
const { Recipe, Diet } = require('../db');
const axios = require("axios");
const {apiKey} = process.env


// ? FUNCION NORMALIZADORA
const cleanArray = (arr)=>{
    // console.log('arr', arr);
    const clean = arr.map(e =>{
        return{
            id: e.id,
            image: e.image,
            name: e.title,
            diets: e.diets,
            dishTypes: e.dishTypes,
            summary: e.summary,
            healthScore: e.healthScore,
            stepByStep: e.stepByStep,
            created: false

        }
    })
    console.log("CLEAN", clean);
    return clean
}

// TRAE RECETAS DE LA API
const getApiRecipes = async ()=>{
    const apiInfo = (await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&addRecipeInformation=true&number=50`)).data.results;
    console.log('recetas  >>>', apiInfo.data);
    apiInfo.map(e => {
        return{
            id: e.id,
            image: e.image,
            name: e.title,
            diets: e.diets,
            summary: e.summary,
            score: e.spoonacularScore,
            healthScore: e.healthScore,
            dishTypes: e.dishTypes,
            stepByStep: (  e.analyzedInstructions[0] &&
                e.analyzedInstructions[0].steps ? 
                e.analyzedInstructions[0].steps.map(item=>item.step).join(" \n") : 
                ''),
        }
    })
    // console.log('API INFO -->', apiInfo);
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
    // console.log('RECETAS API',recipesApi);

    const allRecipes = [...recipesDb, ...recipesApi]

    return allRecipes

};

// CREA RECETA EN BDz
const createRecipe = async ( name, summary, healthScore, stepByStep, image, diets )=>{

    // console.log('ESTO ES DIETS',diets);

    const newRecipe =  await Recipe.create({name, summary, healthScore, stepByStep, image})

    let dietDb = await Diet.findAll({
        where: {name: diets}
    })    

    newRecipe.addDiet(dietDb)
    // console.log('dieta agregada--->',dietDb);
    // console.log('con dieta agregada--->',newRecipe);
    return newRecipe
   
   
   // ------------------------------------
   
    // console.log('NAME',name);
    // // console.log('DIETTTSSSSS---->',diets);
    // let newRecipe = await Recipe.create({
    //     name, 
    //     summary, 
    //     // healthScore, 
    //     // stepByStep,
    //     // image
    // })
    
    // let dietDb = await Diet.findAll({
    //     where: {name: diets}
    // })
    // newRecipe.addDiet(dietDb)

    // console.log('DIET',dietDb);

    // console.log('NUEVA RECETA controllers',newRecipe);
    return newRecipe;
}

// BUSCA POR ID
const getRecipeById = async (id, source)=>{
    // const recipesInArray = []
    
    const recipe = source === 'api' 
    ? (await axios.get (`https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}`)).data

    : await Recipe.findByPk(id);

    // const recipeId = cleanArray(recipe)



    // const recipeClean = cleanArray(recipe)
    // console.log('RECETAS POR ID',recipe);
    return recipe
}


// busca por NAME
const searchRecipeByName = async (name)=>{
    // ! probar sin este llamado
    const dataBaseRecipes = await Recipe.findAll({
        where:{name}
    })

    const recipesApiRaw = await getAllRecipes();
    const recipesByName = recipesApiRaw.filter(e => e.name.toLowerCase() === name.toLowerCase())
    // console.log('RECIPES BY NAME --->',recipesByName);
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