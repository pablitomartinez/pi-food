import Card from "../Card/Card";
import s from './CardsContainer.module.css';
import { useSelector } from "react-redux";

const CardsContainer = ()=>{
    const recipes = useSelector(state => state.recipes)
    console.log(recipes);

    return(
        <div className={s.container}>
            {recipes.map(e =>{
                return <Card 
                    key={e.id}
                    id={e.id}
                    name={e.name}
                    image={e.image}
                    summary={e.summary}
                    healthScore={e.healthScore}
                    stepByStep={e.stepByStep}
                    dishTypes={e.dishTypes}
                    created={e.created}
                />
            })}
        </div>
    )
}

export default CardsContainer