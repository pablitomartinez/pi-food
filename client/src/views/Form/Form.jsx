import axios from "axios"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom"
import { getDiets } from "../../redux/actions"
import f from './Form.module.css'

const Form =() =>{
    
    const [form, setForm] = useState({
        title: '',
        summary: '',
        score: '',
        healthScore: '',
        diets: [],
        stepByStep: '',
        image: '',

    })

    const diets = useSelector(state => state.diets)
    console.log(diets);
    const stepByStep = useSelector(state => state.stepByStep)
    console.log(stepByStep);

    const history = useHistory()

    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getDiets())
    }, [dispatch])

    const changeHandler = (e)=>{
        const property = e.target.name;
        const value = e.target.value;
        console.log(value);
        setForm({...form, [property]:value})
    }

    const submitHandler = (e)=>{
        e.preventDefault()
        console.log(form);
        axios.post('http://localhost:3001/recipes', form)
        .then( res => alert(res))
        .catch( err => alert(err) )
        
        
        // .then( res => alert(res))
        // history.push('/home')


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
    
    return(
        <div>
        <h2>Crea tu receta</h2>
        <div>

        <form 
            className={f.container} 
            onSubmit={submitHandler}
            >
            
            <div className={f.name} >
                <label>Nombre del Plato:
                    <input 
                        type='text' 
                        name="title"
                        value={form.title}
                        onChange={changeHandler}   
                        />
                </label>
            </div>
            
            <div>
                <label>Resumen del Plato: 
                    <textarea 
                        type='text' 
                        name="summary"
                        value={form.summary}
                        onChange={changeHandler}
                        />
                </label>
            </div>
            
            <div>
                <label>Puntaje de Salud: 
                    <input type='range' 
                            min="0" 
                            max="100"
                            name="healthScore"
                            value={form.healthScore}
                            onChange={changeHandler}

                    />
                </label>
            </div>
            
            <div>
                <label>Paso a paso:
                    <textarea 
                        type='text' 
                        name="stepByStep"
                        value={form.stepByStep}
                        onChange={changeHandler}
                        />
                </label>
            </div>

            <div>
                <label>Imagen del plato:
                    <input type='image' name="image"/>
                </label>
            </div>
     
        <div className={f.container}>
            <div>
                    <h4>Tipos de Dieta:</h4>
                <div className={f.diets}>
                    {
                        diets.length > 0 &&
                            diets.map((e) =>(
                                <label 
                                    key={e} >
                                    <input
                                        type='checkbox'
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
            <button type="submit" >CREAR RECETA</button>
        </form>
        </div>
        </div>
    )
}

export default Form