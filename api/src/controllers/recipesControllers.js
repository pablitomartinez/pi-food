// funciones que si interactuan con el modelo
const { Recipe, Diet } = require("../db");
const { Op } = require("sequelize"); // Asegúrate de importar 'Op'
// const mockRecipes = require('../data'); // Importa las recetas simuladas
const axios = require("axios");
const apiKey = process.env.SPOONACULAR_API_KEY;

// ? FUNCION NORMALIZADORA
// const cleanArray = (arr)=>{
//     // console.log(arr);
//     const clean = arr.map(elem =>{
//         return{
//             id: elem.id,
//             image: elem.image,
//             name: elem.title,
//             diets: elem.diets,
//             dishTypes: elem.dishTypes,
//             summary: elem.summary,
//             healthScore: elem.healthScore,
//             stepByStep: elem.analyzedInstructions[0]?.steps.map(e => {
//                 return {
//                     number: e.number,
//                     step: e.step
//                 }
//             }),
//             created: false

//         }
//     })
//     return clean
// }

// ? nueva funcion normalizadora
// ? FUNCION NORMALIZADORA
const cleanArray = (arr) => {
  const clean = arr.map((elem) => {
    return {
      id: elem.id,
      image: elem.image,
      name: elem.title,
      diets: elem.diets,
      dishTypes: elem.dishTypes,
      summary: elem.summary,
      healthScore: elem.healthScore,
      stepByStep:
        elem.analyzedInstructions &&
        elem.analyzedInstructions[0] &&
        elem.analyzedInstructions[0].steps
          ? elem.analyzedInstructions[0].steps.map((e) => {
              return {
                number: e.number,
                step: e.step,
              };
            })
          : [], // Devuelve un array vacío si no hay pasos
      created: false,
    };
  });
  return clean;
};

// TRAE RECETAS DE LA API
// const getApiRecipes = async ()=>{
//     const apiInfo = (await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&addRecipeInformation=true&number=100`)).data.results;
//     apiInfo.map(e => {
//         return{
//             id: e.id,
//             image: e.image,
//             name: e.title,
//             diets: e.diets,
//             summary: e.summary,
//             score: e.spoonacularScore,
//             healthScore: e.healthScore,
//             dishTypes: e.dishTypes,
//             stepByStep: e.analyzedInstructions[0]?.steps.map(e => {
//                 return {
//                     number: e.number,
//                     step: e.step
//                 }
//             })
//         }
//     })
//     console.log('API INFO -->', apiInfo);
//     return apiInfo
// }
// TRAE RECETAS DE LA API
const getApiRecipes = async () => {
  const apiInfo = (
    await axios.get(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&addRecipeInformation=true&number=100`
    )
  ).data.results;

  // const apiInfo = mockRecipes

  const cleanApiInfo = apiInfo.map((e) => {
    return {
      id: e.id,
      image: e.image,
      name: e.title,
      diets: e.diets,
      summary: e.summary,
      score: e.spoonacularScore,
      healthScore: e.healthScore,
      dishTypes: e.dishTypes,
      stepByStep:
        e.analyzedInstructions &&
        e.analyzedInstructions[0] &&
        e.analyzedInstructions[0].steps
          ? e.analyzedInstructions[0].steps.map((step) => {
              return {
                number: step.number,
                step: step.step,
              };
            })
          : [], // Si no hay `analyzedInstructions` o `steps`, devolvemos un array vacío
    };
  });

  console.log("API INFO -->", cleanApiInfo);
  return cleanApiInfo;
};

// TRAE TODO
//      API
//      BD
// const getAllRecipes = async () => {
//   // BD
//   const recipesDb = await Recipe.findAll();
//   // API (crudo)
//   const recipesApiRaw = await getApiRecipes();
//   // console.log('RECETAS --->',recipesApiRaw);

//   // ? FUNCION NORMALIZADORA
// //   const recipesApi = cleanArray(recipesApiRaw);
//   // console.log(recipesApi);

//   const allRecipes = [...recipesDb, ...recipesApiRaw];

//   return allRecipes;
// };
// const getAllRecipes = async () => {
//   // BD
//   const recipesDb = await Recipe.findAll({
//     include: {
//       model: Diet,
//       attributes: ["name"], // Selecciona solo el nombre de las dietas
//       through: { attributes: [] }, // No incluir la tabla intermedia en el resultado
//     },
//   });

//   // API (crudo)
//   const recipesApiRaw = await getApiRecipes();

//   const allRecipes = [...recipesDb, ...recipesApiRaw];

//   return allRecipes;
// };
// Obtener todas las recetas (API + BD)
const getAllRecipes = async () => {
  // Obtener recetas de la base de datos
  const recipesDb = await Recipe.findAll({
    include: {
      model: Diet,
      attributes: ["name"], // Incluye solo el nombre de las dietas
      through: { attributes: [] }, // No incluir atributos de la tabla intermedia
    },
  });

  // Formatear las recetas de la base de datos para que las `diets` sean un array de strings
  const formattedDbRecipes = recipesDb.map((recipe) => ({
    ...recipe.toJSON(),
    diets: recipe.diets.map((diet) => diet.name.toLowerCase()), // Convertir a strings en minúsculas
  }));

  // Obtener recetas de la API
  const recipesApiRaw = await getApiRecipes();

  // Combinar recetas de la BD y la API
  const allRecipes = [...formattedDbRecipes, ...recipesApiRaw];

  return allRecipes;
};

// CREA RECETA EN BD
// const createRecipe = async (
//   name,
//   summary,
//   healthScore,
//   stepByStep,
//   dietTypes
// ) => {
//   // Convertir dietTypes a un array si es una cadena
//   if (typeof dietTypes === "string") {
//     dietTypes = dietTypes.split(","); // Separar por comas
//   }

//   // Verificar que todas las dietas sean válidas
//   if (!dietTypes || dietTypes.length === 0) {
//     throw new Error("El tipo de dieta no es válido o está vacío.");
//   }

//   let newRecipe = await Recipe.create({
//     name,
//     summary,
//     healthScore,
//     stepByStep,
//   });

//   let recipeDb = await Diet.findAll({
//     where: { name: dietTypes }, // Busca dietas con estos nombres
//   });

//   newRecipe.addDiet(recipeDb);

//   console.log("NUEVA RECETA", newRecipe);
//   return newRecipe;
// };

// Crear una nueva receta
const createRecipe = async (
  name,
  summary,
  healthScore,
  stepByStep,
  dietTypes,
  image
) => {
  // Asegurarnos de que dietTypes es un array de strings
  if (typeof dietTypes === "string") {
    dietTypes = JSON.parse(dietTypes); // Convertir JSON string a array si es necesario
  }

  if (!dietTypes || !Array.isArray(dietTypes) || dietTypes.length === 0) {
    throw new Error("El tipo de dieta no es válido o está vacío.");
  }

  // Crear la receta en la base de datos
  const newRecipe = await Recipe.create({
    name,
    summary,
    healthScore,
    stepByStep,
    image,
  });

  // Buscar dietas en la base de datos por nombre y asociarlas con la receta
  const recipeDiets = await Diet.findAll({
    where: { name: { [Op.in]: dietTypes.map((diet) => diet.toLowerCase()) } },
  });

  if (recipeDiets.length === 0) {
    throw new Error("No se encontraron dietas válidas en la base de datos.");
  }

  // Asociar dietas a la receta
  await newRecipe.addDiets(recipeDiets);

  console.log("NUEVA RECETA", newRecipe);
  return newRecipe;
};

// BUSCA POR ID
const getRecipeById = async (id, source) => {
  // const recipesInArray = []

  const recipe =
    source === "api"
      ? (
          await axios.get(
            `https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}`
          )
        ).data
      : await Recipe.findByPk(id);

  // const recipeClean = cleanArray(recipe)
  console.log("RECETAS POR ID", recipe);
  return recipe;
};

// busca por NAME
const searchRecipeByName = async (name) => {
  const dataBaseRecipes = await Recipe.findAll({
    where: { name },
  });

  const recipesApiRaw = await getAllRecipes();
  const recipesByName = recipesApiRaw.filter((e) => e.name === name);
  console.log("RECIPES BY NAME --->", recipesByName);
  // ? FUNCION NORMALIZADORA
  // const recipesApi = cleanArray(recipesApiRaw)

  // const filteredApi = recipesApi.filter((recipe)=> recipe.name === name)

  // BASE DE DATOS & FILTER API
  return [...dataBaseRecipes, ...recipesByName];
};

module.exports = {
  createRecipe,
  getRecipeById,
  searchRecipeByName,
  getAllRecipes,
};
