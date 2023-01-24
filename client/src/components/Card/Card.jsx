const Card = (props)=>{
  return(
    <div>
        <h3>{props.name}</h3>
        <img src={props.image} alt={'no hay imagen de la receta'} />
        <h4>Tipos de Ditas: {props.dishTypes.map(e =>{
            return(
                <li>{e}</li>
            )
        })}</h4>
    </div>
  )  
}

export default Card