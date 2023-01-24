import { Link } from "react-router-dom";
import s from './Navbar.module.css'

const Navbar = ()=>{
    return(
        <div className={s.container} >
            <Link to={'/home'}>
                HOME
            </Link>
            <Link to={'/create'}>
                FORM
            </Link>
        </div>
    )
}

export default Navbar