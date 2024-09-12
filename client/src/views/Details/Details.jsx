// import { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { getRecipeDetail } from "../../redux/actions";
// import "./Details.css"; // Asegúrate de importar tu nuevo archivo de estilos

// const Details = (props) => {
//   const dispatch = useDispatch();
//   const id = props.match.params.id;

//   useEffect(() => {
//     dispatch(getRecipeDetail(id));
//   }, [dispatch, id]);

//   const detail = useSelector((state) => state.recipeDetails);

//   return (
//     // <div className="detail-container">
//     //   <h1 className="recipe-header">{detail.title}</h1>
//     //   <img src={detail.image} alt={detail.title} className="recipe-image" />

//     //   <div className="ingredients-container">
//     //     <h2>Ingredients:</h2>
//     //     {detail.extendedIngredients?.length > 0 ? (
//     //       <ul>
//     //         {detail.extendedIngredients.map((ingredient, index) => (
//     //           <li key={index}>{ingredient.original}</li>
//     //         ))}
//     //       </ul>
//     //     ) : (
//     //       <p>No ingredients available.</p>
//     //     )}
//     //   </div>

//     //   <div className="instructions-container">
//     //     <h2>Instructions:</h2>
//     //     {detail.analyzedInstructions?.length > 0 &&
//     //     detail.analyzedInstructions[0].steps.length > 0 ? (
          
//     //       <ul>
//     //         {detail.analyzedInstructions[0].steps.map((step, index) => (
//     //           <li key={index}>
//     //             <strong>Step {step.number}:</strong> {step.step}
//     //           </li>
//     //         ))}
//     //       </ul>
//     //     ) : (
//     //       <p>No instructions available.</p>
//     //     )}
//     //   </div>
//     // </div>
//     <div class="detail-container">
//     <h1 class="recipe-header">Red Lentil Soup with Chicken and Turnips</h1>
//     <img src="path/to/image.jpg" alt="Red Lentil Soup" class="recipe-image" />

//     <div class="ingredients-container">
//         <h2>Ingredients:</h2>
//         <ul class="ingredients-list">
//             <li>1 bag of frozen organic asparagus (preferably thawed)</li>
//             <li>1T EVOO (extra virgin olive oil)</li>
//             <li>6 cloves of garlic, finely minced</li>
//             {/* <!-- Add more ingredients here --> */}
//         </ul>
//     </div>

//     <div class="instructions-container">
//         <h2>Instructions:</h2>
//         <ol class="instructions-list">
//             <li><strong>Step 1:</strong> Chop the garlic and saute it in the EVOO.</li>
//             <li><strong>Step 2:</strong> Add the asparagus and cook until soft.</li>
//             {/* <!-- Add more steps here --> */}
//         </ol>
//     </div>
// </div>

//   );
// };

// export default Details;


import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getRecipeDetail } from "../../redux/actions";
import "./Details.css"; // Importa el archivo CSS actualizado

const Details = (props) => {
  const dispatch = useDispatch();
  const id = props.match.params.id;

  useEffect(() => {
    dispatch(getRecipeDetail(id));
  }, [dispatch, id]);

  const detail = useSelector((state) => state.recipeDetails);

  return (
    <div className="detail-container">
      <h1 className="recipe-header">{detail.title}</h1>
      <img src={detail.image} alt={detail.title} className="recipe-image" />

      {/* Nuevo contenedor con grid para colocar ingredientes e instrucciones lado a lado */}
      <div className="details-grid">
        <div className="ingredients-container">
          <h2>Ingredients:</h2>
          {detail.extendedIngredients?.length > 0 ? (
            <div className="ingredients-grid">
              {detail.extendedIngredients.map((ingredient, index) => (
                <div key={index} className="ingredient-item">
                  {ingredient.original}
                </div>
              ))}
            </div>
          ) : (
            <p>No ingredients available.</p>
          )}
        </div>

        <div className="instructions-container">
          <h2>Instructions:</h2>
          {detail.analyzedInstructions?.length > 0 &&
          detail.analyzedInstructions[0].steps.length > 0 ? (
            <div className="instructions-grid">
              {detail.analyzedInstructions[0].steps.map((step, index) => (
                <div key={index} className="instruction-item">
                  <strong>Step {step.number}:</strong> {step.step}
                </div>
              ))}
            </div>
          ) : (
            <p>No instructions available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Details;
