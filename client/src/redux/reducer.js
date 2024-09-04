// Importamos las acciones que hemos definido en actions.js
import {
  GET_RECIPES,
  GET_RECIPE_DETAIL,
  GET_DIETS,
  FILTER_BY_DIET,
  SORT_RECIPES,
} from "./actions";

// Estado inicial de la aplicación
const initialState = {
  recipes: [], // Contendrá las recetas filtradas y ordenadas
  allRecipes: [], // Contendrá todas las recetas obtenidas (para aplicar filtros sin perder los datos originales)
  recipeDetails: {}, // Detalles de una receta específica
  diets: [], // Contendrá los tipos de dietas disponibles
};

// Reducer para manejar las acciones
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RECIPES:
      return {
        ...state,
        recipes: action.payload, // Guardamos las recetas en 'recipes'
        allRecipes: action.payload, // Guardamos una copia en 'allRecipes'
      };

    case GET_DIETS:
      return {
        ...state,
        diets: action.payload, // Actualizamos el estado de 'diets' con los tipos de dietas obtenidos de la API
      };

    case FILTER_BY_DIET:
      // Filtramos las recetas en base al tipo de dieta seleccionado
      const allRecipesFiltered = state.allRecipes; // Usamos la copia original para filtrar
      const recipesFiltered =
        action.payload === "All"
          ? allRecipesFiltered
          : allRecipesFiltered.filter((recipe) =>
              recipe.diets.includes(action.payload)
            );

      return {
        ...state,
        recipes: recipesFiltered, // Actualizamos el estado con las recetas filtradas
      };

    case SORT_RECIPES:
      // Ordenamos las recetas según el orden seleccionado (A-Z o Z-A)
      const sortedRecipes = [...state.recipes].sort((a, b) => {
        if (action.payload === "asc") {
          return a.name.localeCompare(b.name); // Orden alfabético ascendente
        } else {
          return b.name.localeCompare(a.name); // Orden alfabético descendente
        }
      });
      return {
        ...state,
        recipes: sortedRecipes, // Actualizamos el estado con las recetas ordenadas
      };

    case GET_RECIPE_DETAIL:
      return {
        ...state,
        recipeDetails: action.payload, // Actualizamos el estado con los detalles de la receta seleccionada
      };

    default:
      return { ...state }; // Devuelve el estado actual si la acción no es reconocida
  }
};

export default rootReducer;
