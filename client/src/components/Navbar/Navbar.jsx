import { Link } from "react-router-dom";
import Searchbar from "../Searchbar/Searchbar";
import s from './Navbar.module.css'

const Navbar = ()=>{
    return(
        <div className={s.container} >
            <Link to={'/home'} >
                <input className={s.input}  type='button' value='HOME'/>
            </Link>
            <Searchbar/>
        </div>
    )
}

export default Navbar