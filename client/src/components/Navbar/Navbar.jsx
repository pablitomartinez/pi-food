import { Link } from "react-router-dom";
import s from "./Navbar.module.css";
import logo from "../../assets/logo1.png"; // Asegúrate de tener un logo o puedes usar texto

const Navbar = () => {
  return (
    <nav className={s.navbar}>
      <div className={s.logo}>
        <Link to={"/home"}>
          <img src={logo} alt="Logo" />
        </Link>
      </div>
      <div className={s.links}>
        <Link to={"/home"} className={s.link}>
          HOME
        </Link>
        <Link to={"/create"} className={s.link}>
          CREATE RECIPE
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
