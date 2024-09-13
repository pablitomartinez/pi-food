//exporto funciones controladoras.. controllers
const {
  createRecipe,
  getRecipeById,
  searchRecipeByName,
  getAllRecipes,
} = require("../controllers/recipesControllers");
const Recipe = require("../models/Recipe");

//! busqueda inexacta con Op.iLike y un filter-includes
// const getRecipesApiHandler = async (req,res) => {
//     const {name} = req.query

//     const recipes = name
//     ? await searchRecipeByName(name)
//     : await getAllRecipes();

//     res.status(200).send(recipes);
//     // res.status(400).send({error: error.message})

// }

// ? nueva funcion
const getRecipesApiHandler = async (req, res) => {
  const { name, diet } = req.query;

  try {
    let recipes = await getAllRecipes();

    // Filtro por nombre
    if (name) {
      recipes = recipes.filter((recipe) =>
        recipe.name.toLowerCase().includes(name.toLowerCase())
      );
    }

    // Filtro por tipo de dieta
    if (diet) {
      recipes = recipes.filter((recipe) =>
        recipe.diets.includes(diet.toLowerCase())
      );
    }

    res.status(200).json(recipes);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

const getDbRecipesHandler = (req, res) => {
  res.status(200).send("traigo las recipes de la BD");
};

// id---> númericos & alfanúmericos
// id---> puede llegar in ID inexistente
const getRecipeByIdHandler = async (req, res) => {
  const { id } = req.params;

  const source = isNaN(id) ? "bdd" : "api";

  try {
    const recipe = await getRecipeById(id, source);
    res.status(200).send(recipe);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const createRecipeHandler = async (req, res) => {
  let { name, summary, healthScore, stepByStep, dietTypes } = req.body;

  // Asegúrate de capturar el nombre del archivo de imagen subido
  let image = req.file ? `/uploads/${req.file.filename}` : null;

  try {
    let newRecipe = await createRecipe(
      name,
      summary,
      healthScore,
      stepByStep,
      dietTypes,
      image
    ); // Asegúrate de pasar 'image' aquí
    res.status(201).json(newRecipe);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getRecipesApiHandler,
  getDbRecipesHandler,
  getRecipeByIdHandler,
  createRecipeHandler,
};
