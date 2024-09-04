import s from "./Card.module.css";
import { Link } from "react-router-dom";

const Card = ({ id, name, image, diets = [] }) => {
  // Verificar si la imagen es relativa y construir la URL completa
  const validImage =
    image && image.startsWith("/uploads")
      ? `http://localhost:3001${image}`
      : image || "/default-image.png";

  console.log("Card props:", { id, name, image, diets });

  return (
    <div className={s.card}>
      <img src={validImage} alt={name} className={s.image} />
      <div className={s.content}>
        <h3 className={s.title}>{name}</h3>
        {/* Asegúrate de que diets sea un array antes de mapear */}
        <ul className={s.diets}>
          {Array.isArray(diets) &&
            diets.map((diet) => (
              <li key={diet.id || diet} className={s.diet}>
                {typeof diet === "object" ? diet.name : diet}
              </li>
            ))}
        </ul>
        <Link to={`/details/${id}`} className={s.link}>
          More Information
        </Link>
      </div>
    </div>
  );
};

export default Card;
