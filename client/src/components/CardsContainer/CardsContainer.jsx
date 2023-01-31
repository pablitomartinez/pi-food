import Card from "../Card/Card";
import s from './CardsContainer.module.css';
import { useSelector } from "react-redux";
import Paginado from "../Paginated/Paginado";

const CardsContainer = ({currentRecipes, recipeForPage, allRecipes, paginado })=>{
    const recipes = useSelector(state => state.recipes)
    // console.log('current recipes-->', currentRecipes);


    return(
        <div className={s.cards}>

            <Paginado 
                recipeForPage={recipeForPage}
                allRecipes = {allRecipes.length}
                paginado= {paginado}
            />     
                <div className={s.container}>       
                        {currentRecipes &&
                            currentRecipes.map(e =>{
                            return <Card 
                            key={e.id}
                            id={e.id}
                            name={e.name}
                                image={e.image}
                                summary={e.summary}
                                healthScore={e.healthScore}
                                stepByStep={e.stepByStep}
                                diets={e.diets}
                                dishTypes={e.dishTypes}
                                created={e.created}
                                />
                            })
                        }     
            </div>
        </div>
    )
}

export default CardsContainer