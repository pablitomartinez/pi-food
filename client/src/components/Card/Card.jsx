import s from "./Card.module.css";
import { Link } from "react-router-dom";

const Card = ({ id, name, image, diets = [] }) => {
  // Verificar si la imagen es relativa y construir la URL completa
  const validImage =
    image && image.startsWith("/uploads")
      ? `http://localhost:3001${image}`
      : image || "/default-image.png";

  return (
    <div className={s.card}>
      <img src={validImage} alt={name} className={s.image} />
      <div className={s.content}>
        <h3 className={s.title}>{name}</h3>
        {/* Etiquetas de dietas */}
        <div className={s.dietTags}>
          {/* {Array.isArray(diets) &&
            diets.map((diet) => (
              <span key={diet} className={s.dietTag}>
                {diet}
              </span>
            ))} */}
          {Array.isArray(diets) &&
            diets.map((diet) => (
              <span key={diet.name} className={s.dietTag}>
                {diet.name}
              </span>
            ))}
        </div>
        {/* Botón para más información */}
        <Link to={`/details/${id}`} className={s.link}>
          <button className={s.moreInfoBtn}>Más Información</button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
