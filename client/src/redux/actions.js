import axios from 'axios';

export const GET_RECIPES = "GET_RECIPES";
export const GET_RECIPE_DETAIL = "GET_RECIPE_DETAIL";
export const GET_DIETS = "GET_DIETS";
export const FILTER_BY_VALUE = "FILTER_BY_VALUE";
export const SORTED_RECIPES = 'SORTED_RECIPES';
export const FILTER_BY_DIET = "FILTER_BY_DIET";
export const SORT_RECIPES = "SORT_RECIPES";


export const getRecipes = ()=>{
    return async function (dispatch){
        let apiData = await axios.get("http://localhost:3001/recipes")
        // console.log(apiData);
        const recipes = apiData.data;

        console.log("Datos obtenidos de la API:", recipes);

        dispatch({
            type: GET_RECIPES,
            payload: recipes
        })
    };
} 

export const getRecipeDetail = (id)=>{
    return async function (dispatch){
        let apiData = await axios.get(`http://localhost:3001/recipes/${id}`)
        let recipeDetail = apiData.data
        // console.log('FUNCION DETAIL', recipeDetail);
        dispatch({
            type: GET_RECIPE_DETAIL,
            payload: recipeDetail
        })
    }
}

export const getRecipeById = (id)=>{
    return async function (dispatch){
        let apiData = await axios.get(`http://localhost:3001/recipes/${id}`)
        let recipeDetail = apiData.data

        dispatch({
            type: GET_RECIPE_DETAIL,
            payload: recipeDetail
        })
    }
}

export const getDiets = ()=>{
    return async function(dispatch){
        let diets = (await axios.get('http://localhost:3001/diets')).data

        dispatch({
            type: GET_DIETS,
            payload: diets
        })

    }
}

export const filterRecipesaByStatus = (payload)=>{
    // console.log(payload);
    return{
        type: FILTER_BY_VALUE,
        payload
    }
}

export const sortedRecipesByName = (payload)=>{
    console.log(payload);
    return{
        type: SORTED_RECIPES,
        payload
    }
}

// Acción para filtrar recetas por tipo de dieta
export const filterRecipesByDiet = (diet) => {
  return {
    type: FILTER_BY_DIET,
    payload: diet,
  };
};

// Acción para ordenar recetas
export const sortRecipes = (order) => {
  return {
    type: SORT_RECIPES,
    payload: order,
  };
};


