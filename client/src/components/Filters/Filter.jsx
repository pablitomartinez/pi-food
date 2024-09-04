// Filter.jsx
import React from "react";
import { useDispatch } from "react-redux";
import { filterRecipesByDiet, sortRecipes } from "../../redux/actions";

const Filter = ({ setCurrentPage, setOrder }) => {
  const dispatch = useDispatch();

  const handleFilterChange = (e) => {
    dispatch(filterRecipesByDiet(e.target.value));
    setCurrentPage(1);
  };

  const handleSortChange = (e) => {
    dispatch(sortRecipes(e.target.value));
    setCurrentPage(1);
    setOrder(`Ordenado de ${e.target.value}`);
  };

  return (
    <div>
      <div>
        <span>Sort:</span>
        <select onChange={handleSortChange}>
          <option value="asc">A-Z</option>
          <option value="des">Z-A</option>
        </select>

        <span>Filter By Diet: </span>
        <select onChange={handleFilterChange}>
          <option value="All">All</option>
          <option value="gluten free">Gluten Free</option>
          <option value="dairy free">Dairy Free</option>
          {/* Añade más opciones aquí según las dietas disponibles */}
        </select>
      </div>
    </div>
  );
};

export default Filter;
