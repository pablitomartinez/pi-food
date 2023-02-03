import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRecipeById } from "../../redux/actions";

const Details = (props) =>{
//    console.log('PROPS DE DETAILS', props);
    const dispatch = useDispatch();
    
    const id = props.match.params.id;

    useEffect(()=>{
        dispatch(getRecipeById(id))
    }, [])

    const recipeDetails = useSelector(state => state.recipeById)

    const steps = recipeDetails.analyzedInstructions[0].steps

    console.log('STEPS', steps);
    // console.log(recipeDetails.analyzedInstructions);

    return(
        <div>
            estas en DETAILS
            <div>
                <img 
                src={recipeDetails ? 
                    recipeDetails.image :
                    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fes.pngtree.com%2Ffreebackground%2Fwestern-food-platter_1198607.html&psig=AOvVaw0f9pkvVXfEuHa2BvBlLH2i&ust=1675381817663000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCOCeuJbB9fwCFQAAAAAdAAAAABAI"
                } alt="no image found"/>
            </div>

            <div>
                
                <h2>Name: {recipeDetails.title}</h2>
                
                
                <p>Tipo de Plato:</p>
                {
                    recipeDetails.dishTypes ? 
                 recipeDetails.dishTypes?.map(e => {
                    return(
                        <h2 key={e} > {e} </h2>
                    )
                 }) :
                 ""
                }

                <p>Tipo de Dietas:</p>
                {
                    recipeDetails.diets ? 
                 recipeDetails.diets?.map(e => {
                    return(
                        <h2 key={e} > {e} </h2>
                    )
                 }) :
                 ""
                }
                

            </div>

            <div>
                <p> Resumen:{recipeDetails.summary.replace(/<[^>]*>/g, "")} </p>
                <p> Nivel de comida saludable:{recipeDetails.healthScore} </p>
                <p> Paso a Paso:{steps ? steps.map(e => {
                    return(
                        <li key={e.number}>{e.step}</li>
                        )
                    }) :
                    ""
                } </p>


            </div>

        </div>
    )
}

export default Details