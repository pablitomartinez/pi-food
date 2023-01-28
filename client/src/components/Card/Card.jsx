import s from './Card.module.css'

const Card = (props)=>{
  console.log(props);
  return(
    <div className={s.card}>
        <h3>{props.name}</h3>
        <img src={props.image} alt={'no hay imagen de la receta'} />
        <h4>Tipos de Dietas: {props.dishTypes.map(e =>{
            return(
                <li key={e}>{e}</li>
            )
        })}</h4>
        <button>More Information</button>
    </div>
  )  
}

export default Card