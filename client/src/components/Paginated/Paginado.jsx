import React from "react";
import p from './Paginado.module.css';

const Paginado = ({recipeForPage, allRecipes, paginado})=>{
    const pagNumbers = [];
    
    for(let i = 0; i <= Math.ceil(allRecipes/recipeForPage); i++ ){
        pagNumbers.push(i + 1)
    }

    return(
        <div className={p.container} >
    
                <ul>
                    { pagNumbers &&
                    pagNumbers.map( number =>(                    
                        <li key={number} >
                            <a onClick={() => paginado(number)} > {number} </a>
                        </li>
                    ))  
                    }
                </ul>   
        </div>
    )
}

export default Paginado