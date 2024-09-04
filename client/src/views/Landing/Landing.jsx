import { Link } from "react-router-dom";
import "./Landing.css";
import Card from "../../components/Card/Card";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getRecipes } from "../../redux/actions"; // Importar la acción

const Landing = () => {
  const dispatch = useDispatch(); // Inicializar useDispatch

  useEffect(() => {
    dispatch(getRecipes()); // Disparar la acción al montar el componente
  }, [dispatch]);

  const recipes = useSelector((state) => state.recipes); // Asumiendo que tienes las recetas en el estado global de Redux
  console.log(recipes);

  const popularRecipes = recipes.slice(0, 3); // Seleccionando las tres primeras recetas

  return (
    <div className="landing-container">
      <header className="hero-section">
        <h1>Simple and Tasty Recipes</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
          turpis molestie, dictum est a, mattis tellus.
        </p>
        <Link to={"/home"}>
          <button className="cta-button">Ver Recetas</button>
        </Link>
      </header>

      <section className="popular-recipes">
        <h2>Our Recipes</h2>
        <div className="recipes-container">
          {popularRecipes.map((recipe) => (
            <Card
              key={recipe.id}
              id={recipe.id}
              name={recipe.name}
              image={recipe.image}
              diets={recipe.diets}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Landing;
