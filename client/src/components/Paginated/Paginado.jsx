import React from "react";
import p from "./Paginado.module.css";

const Paginado = ({ recipeForPage, allRecipes, paginado, currentPage }) => {
  const pagNumbers = [];
  const totalPages = Math.ceil(allRecipes / recipeForPage);
  const maxPagesToShow = 3; // Número máximo de páginas para mostrar

  // Determinar las páginas que se deben mostrar
  const startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
  const endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

  for (let i = startPage; i <= endPage; i++) {
    pagNumbers.push(i);
  }

  return (
    <div className={p.container}>
      <ul>
        {/* Flecha Anterior */}
        {currentPage > 1 && (
          <li>
            <button onClick={() => paginado(currentPage - 1)}>&laquo;</button>
          </li>
        )}

        {/* Números de página */}
        {pagNumbers.map((number) => (
          <li key={number}>
            <button
              onClick={() => paginado(number)}
              className={currentPage === number ? p.active : ""}
            >
              {number}
            </button>
          </li>
        ))}

        {/* Flecha Siguiente */}
        {currentPage < totalPages && (
          <li>
            <button onClick={() => paginado(currentPage + 1)}>&raquo;</button>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Paginado;
