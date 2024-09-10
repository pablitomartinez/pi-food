// Filter.jsx
import React from "react";
import { useDispatch } from "react-redux";
import { filterRecipesByDiet, sortRecipes } from "../../redux/actions";
import s from "./Filter.module.css"; // Importa el archivo CSS

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
    <div className={s.filterContainer}>
      <div className={s.filterItem}>
        <label className={s.label}>Ordenar:</label>
        <select className={s.select} onChange={handleSortChange}>
          <option value="asc">A-Z</option>
          <option value="des">Z-A</option>
        </select>
      </div>

      <div className={s.filterItem}>
        <label className={s.label}>Filtrar por dieta:</label>
        <select className={s.select} onChange={handleFilterChange}>
          <option value="All">Todas</option>
          <option value="gluten free">Sin Gluten</option>
          <option value="dairy free">Sin Lácteos</option>
          {/* Añade más opciones aquí según las dietas disponibles */}
        </select>
      </div>
    </div>
  );
};

export default Filter;
