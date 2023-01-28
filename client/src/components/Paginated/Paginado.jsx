import React from "react";

export default function Paginado({recipeForPage, allRecipes, paginado}){
    const pagNumbers = []

    for(let i = 0; i <= Math.ceil(allRecipes/recipeForPage); i++ ){
        pagNumbers.push(i)
    }


    return(
        <nav>
            <ul>
                { pagNumbers &&
                
                
                
                }
            </ul>
        </nav>
    )
}