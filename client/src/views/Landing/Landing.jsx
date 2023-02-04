import { Link } from 'react-router-dom';
import l from './Landing.module.css'
import img from '../../imagenes/plato.png'

const Landing =() =>{

    

    return(
        <div className={l.caja} >

        <div className={l.container}>
            
            
                <div className={l.text}>
                    <h1>Mirá todas las recetas que tenemos para vos. Las mejores comidas, entradas y postres explicadas por los que saben.</h1>

                    <p>En este sitio puedes crear y compartir tu receta con todo el mundo 🌍</p>

                    <Link to={'/home'} >
                        <input type="button" value="Ingresar"/>
                    </Link>
                </div>
    
            
            <div className={l.banner}>
                <img src={img} alt=""/>
            
            </div>
        </div>
        </div>
    )
}

export default Landing