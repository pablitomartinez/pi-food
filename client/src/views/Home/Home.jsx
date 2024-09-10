import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRecipes } from "../../redux/actions"; // Eliminé getRecipeDetail si no se usa
import CardsContainer from "../../components/CardsContainer/CardsContainer";
import Paginado from "../../components/Paginated/Paginado";
import Filter from "../../components/Filters/Filter";

const Home = () => {
  const dispatch = useDispatch();
  const allRecipes = useSelector((state) => state.recipes);

  useEffect(() => {
    dispatch(getRecipes());
  }, [dispatch]); // Agregado dispatch como dependencia para evitar advertencias

  // -PAGINADO-
  const [currentPage, setCurrentPage] = useState(1); // Página actual
  const [recipeForPage] = useState(9); // Recetas por página

  const indexOfLastRecipe = currentPage * recipeForPage; // Índice de la última receta
  const indexOfFirstRecipe = indexOfLastRecipe - recipeForPage; // Índice de la primera receta

  const currentRecipes = allRecipes.slice(
    indexOfFirstRecipe,
    indexOfLastRecipe
  ); // Recetas actuales para mostrar

  // Estado para ordenar recetas
  const [order, setOrder] = useState("");

  const paginado = (pagNumber) => {
    setCurrentPage(pagNumber);
  };

  return (
    <>
      <Filter setCurrentPage={setCurrentPage} setOrder={setOrder} />
      <Paginado
        recipeForPage={recipeForPage}
        allRecipes={allRecipes.length}
        paginado={paginado}
        currentPage={currentPage} // Prop adicional para identificar la página actual
      />
      <CardsContainer
        currentRecipes={currentRecipes}
        recipeForPage={recipeForPage}
        allRecipes={allRecipes}
        paginado={paginado}
      />
      <Paginado
        recipeForPage={recipeForPage}
        allRecipes={allRecipes.length}
        paginado={paginado}
        currentPage={currentPage} // Prop adicional para identificar la página actual
      />
    </>
  );
};

export default Home;
