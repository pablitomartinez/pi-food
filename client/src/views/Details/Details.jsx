import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getRecipeDetail } from "../../redux/actions";
import "./Details.css"; // Asegúrate de importar tu nuevo archivo de estilos

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

      <div className="ingredients-container">
        <h2>Ingredients:</h2>
        {detail.extendedIngredients?.length > 0 ? (
          <ul>
            {detail.extendedIngredients.map((ingredient, index) => (
              <li key={index}>{ingredient.original}</li>
            ))}
          </ul>
        ) : (
          <p>No ingredients available.</p>
        )}
      </div>

      <div className="instructions-container">
        <h2>Instructions:</h2>
        {detail.analyzedInstructions?.length > 0 &&
        detail.analyzedInstructions[0].steps.length > 0 ? (
          <ul>
            {detail.analyzedInstructions[0].steps.map((step, index) => (
              <li key={index}>
                <strong>Step {step.number}:</strong> {step.step}
              </li>
            ))}
          </ul>
        ) : (
          <p>No instructions available.</p>
        )}
      </div>
    </div>
  );
};

export default Details;
