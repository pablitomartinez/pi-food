import axios from 'axios';

export const GET_RECIPES = "GET_RECIPES";
export const GET_RECIPE_DETAIL = "GET_RECIPE_DETAIL";
export const GET_DIETS = "GET_DIETS";
export const FILTER_BY_DIETS = "FILTER_BY_DIETS";
export const SORTED_RECIPES = 'SORTED_RECIPES';
export const GET_RECIPE_BY_NAME = 'GET_RECIPE_BY_NAME';
export const POST_RECIPE = 'POST_RECIPE';
export const SORT_SCORE = 'SORT_SCORE';


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
        console.log('RECIPEAPIDATA',apiData);
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

export const filterRecipesaByDiets = (payload)=>{
    // console.log(payload);
    return{
        type: FILTER_BY_DIETS,
        payload
    }
}

export const sortedRecipes = (payload)=>{
    // console.log(payload);
    return{
        type: SORTED_RECIPES,
        payload
    }
}

export const sortScore = (payload)=>{
    return{
        type: SORT_SCORE,
        payload
    }
}

export const getRecipeByName = (name)=>{
    return async function(dispatch){
        let recipeInfoByName = await axios.get(`http://localhost:3001/recipes?name=${name}`)
        let recipeInfo = recipeInfoByName.data
        // console.log('recetas by name--->',  recipeInfo);
        dispatch({
            type: GET_RECIPE_BY_NAME,
            payload: recipeInfo
        })
    }
    
}

export const postRecipe = (payload)=>{
    return async function(dispatch){
        const response = await axios.post("http://localhost:3001/recipes", payload);
        // console.log(response);
        dispatch({
            type: POST_RECIPE,
            payload: response
        })
    }
}

