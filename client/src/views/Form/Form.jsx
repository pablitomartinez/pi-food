import axios from "axios"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
// import { Link, useHistory } from "react-router-dom"
import { getDiets, postRecipe } from "../../redux/actions"
import f from './Form.module.css'

const Form =() =>{
    
    const [form, setForm] = useState({
        name: "",
        summary: '',
        healthScore: '',
        stepByStep: '',
        diets: [],
        image: '',
        
    })
    
    const [errors, setErros] = useState({
        name: "",
        summary: '',
        healthScore: '',
        stepByStep: '',
        diets: [],
        image: '',
    })
    
    const diets = useSelector(state => state.diets)
    // console.log(diets);
    const stepByStep = useSelector(state => state.stepByStep)
    // console.log(stepByStep);
    
    
    // const history = useHistory()
    
    const dispatch = useDispatch()

    // se monta, trae diets
    useEffect(()=>{
        dispatch(getDiets())
    }, [dispatch])

    //se monta, cuando hay cambios en <form>
    useEffect(()=>{
        validate()
    }, [form])

    // ! MODULARIZAR LA FUNCION VALIDATE
    const validate = ()=>{
        if(/^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/.test(form.title)){
            console.log('esta todo bien');
            setErros({...errors, title: "✔️"})
        }else{
            console.log('esta todo mal');
            setErros({...errors, title: "❌ Avoid using numbers"})
        }
    }

    const handleFormChange = (e)=>{
        const property = e.target.name; //--> propiedad
        const value = e.target.value; // --> valor
        
        setForm({
            ...form, 
            [property]:value
        });

        validate()
    }

    
    
    // ! REVISAR
    const handleChecked = (e)=> {
		if (e.target.checked) {
			setForm({
				...form,
				diets: [...form.diets, e.target.name],
			});
		} else {
            setForm({
                ...form,
				diets: [...form.diets].filter((diet) => e.target.name !== diet),
			});
		}
	};
    
    
    const submitHandler = (e)=>{
        // e.preventDefault()
        // axios.post('http://localhost:3001/recipes', form)
        // .then( res => alert(res))
        // .catch( err => alert(err) )
        
        // console.log(form);
        // setForm({
        //     title: "",
        //     summary: '',
        //     healthScore: '',
        //     diets: [],
        //     stepByStep: '',
        //     image: '',
        // })
        
        // .then( res => alert(res))
        // history.push('/home')
        // ? -----------------------------------

        e.preventDefault();
        console.log(form);
        dispatch(postRecipe(form))
        alert("Congratulations, you created a recipe :)")
    }
    return(
        <div>
        <h2>Crea tu receta</h2>
        <div>

        <form 
            className={f.container} 
            onSubmit={submitHandler}
            >
            
            <div className={f.name} >
                <label htmlFor="title">Nombre del Plato: </label>
                    <input 
                        className={errors.title && f.error}
                        type="text"
                        name="name"
                        value={form.title}
                        onChange={handleFormChange}   
                        />
                    <span> {errors.title ? errors.title : "" }</span>
            </div>
            
            <div>
                <label  htmlFor="summary">Resumen del Plato: </label>
                    <textarea 
                        type="text" 
                        name="summary"
                        value={form.summary}
                        onChange={handleFormChange}
                    />
            </div>
            
            <div>
                <label htmlFor="healthScore" >Puntaje de Salud: </label>
                    <input type= "range" 
                            min="0" 
                            max="100"
                            name="healthScore"
                            value={form.healthScore}
                            onChange={handleFormChange}

                    />
            </div>
            
            <div>
                <label htmlFor="stepByStep" >Paso a paso: </label>
                    <textarea 
                        type="text"
                        name="stepByStep"
                        value={form.stepByStep}
                        onChange={handleFormChange}
                        />
            </div>
            
            <div>
                <label htmlFor="image" >Imagen de tu plato: </label>
                    <input 
                        type="text" 
                        name="image"
                        value={form.image}
                        onChange={handleFormChange}
                        />
            </div>
          
     
        <div className={f.container}>
            <div>
                    <h4>Tipos de Dieta:</h4>
                <div className={f.diets}>
                    {
                        diets.length > 0 &&
                            diets.map((e) =>(
                                <label key={e}> 
                                    <input
                                        type= "checkbox"
                                        key={e}
                                        name={e}
                                        onChange={handleChecked}
                                        value={form.diets}
                                /> 
                                {e}
                                </label>  
                        ))
                }
                </div>
            </div>
        </div>
        <br/>
        {/* <Link to={'/home'} > */}
            <button type="submit" >CREAR RECETA</button>
        {/* </Link> */}
        </form>
        </div>
        </div>
    )
}

export default Form