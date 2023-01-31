import s from './Card.module.css'
import { Link } from 'react-router-dom'

const Card = (props)=>{
  console.log(props);
  return(
    <div className={s.card}>
        
        <div className={s.front}>
          <h3>{props.name}</h3>
          <img src={props.image} alt={'no hay imagen de la receta'} />
        </div>

        
        <div className={s.back}>
          <h3>{props.name}</h3>
          <h4>Tipos de Dietas:</h4>
            {props.diets.map(e =>{
              return(
                  <li key={e}>{e}</li>
              )
          })}
          <Link to={`/details/${props.id}`} >
              <p>More Information</p>
          </Link>
        </div>
    </div>
  )  
}

export default Card