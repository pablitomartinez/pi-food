import axios from 'axios';

export const GET_RECIPES = "GET_RECIPES";
export const GET_RECIPE_DETAIL = "GET_RECIPE_DETAIL";
export const GET_DIETS = 'GET_DIETS'


export const getRecipes = ()=>{
    return async function (dispatch){
        let apiData = await axios.get("http://localhost:3001/recipes")
        // console.log(apiData);
        const recipes = apiData.data;

        dispatch({
            type: GET_RECIPES,
            payload: recipes
        })
    };
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
