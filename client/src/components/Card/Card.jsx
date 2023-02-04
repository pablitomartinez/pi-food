import s from './Card.module.css'
import { Link } from 'react-router-dom'


const Card = (props)=>{
  // console.log(props);
  return(
    <div className={s.card}>

        
          <h3>{props.name}</h3>
          <img src={props.image} alt={'no hay imagen de la receta'} />
        

        
        <div className={s.back}>
          <h4>Tipos de Dietas:</h4>
          {props.diets.map(e =>{
              return(
                  <li key={e}>{e}</li>
              )
          })}
          <Link to={`/details/${props.id}`}>
            <input type="button" value="Mas información"/>
          </Link>
        </div>
    </div>
  )  
}

export default Card