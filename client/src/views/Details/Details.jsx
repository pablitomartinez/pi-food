import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRecipeById } from "../../redux/actions";
import d from './Details.module.css'

const Details = (props) => {
     console.log('PROPS DE DETAILS', props);
  const dispatch = useDispatch();

  const id = props.match.params.id;

  const recipeDetails = useSelector((state) => state.recipeById);
  
  useEffect(() => {
      dispatch(getRecipeById(id));
    }, []);
    
    // console.log('recipeDETAILS',recipeDetails.analyzedInstructions[0].steps);

  const steps = recipeDetails;

  console.log("STEPS", steps);

{/* <h2>Paso a Paso:</h2>
{steps
    ? steps.map((e) => {
        return <h4>
        <li key={e.number}>{e.step}</li>
        </h4>
    })
    : ""}{" "} */}


    // .replace(/<[^>]*>/g, "")

  return (
  <div>
            <h1 className={d.name} >Name: {recipeDetails.title}</h1>
      <div className={d.container} >
        
        <div className={d.left} >
            <div>
            <img
                src={
                recipeDetails
                    ? recipeDetails.image
                    : "https://www.google.com/url?sa=i&url=https%3A%2F%2Fes.pngtree.com%2Ffreebackground%2Fwestern-food-platter_1198607.html&psig=AOvVaw0f9pkvVXfEuHa2BvBlLH2i&ust=1675381817663000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCOCeuJbB9fwCFQAAAAAdAAAAABAI"
                }
                alt="no image found"
            />
            </div>


            <h2>Tipo de Plato:</h2>
            {recipeDetails.dishTypes
            ? recipeDetails.dishTypes?.map((e) => {
                return <h4 key={e}> {e} </h4>;
                })
            : ""}

            <h2>Tipo de Dietas:</h2>
            {recipeDetails.diets
            ? recipeDetails.diets?.map((e) => {
                return <h4 key={e}> {e} </h4>;
                })
            : ""}
        </div>

        <div className={d.right} >
            <h2> Resumen:</h2>
            <h6>

                {recipeDetails.summary} 
            </h6>
            <h2> Nivel de comida saludable:</h2>
            <h4>
                {recipeDetails.healthScore} 
            </h4>
          
        </div>

    </div>
  </div>
  );
};

export default Details;
