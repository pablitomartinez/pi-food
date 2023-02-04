import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { getRecipeByName, getRecipes} from '../../redux/actions';
import s from './Searchbar.module.css'
const Searchbar =()=>{
    const dispatch = useDispatch()
    const [name, setName] = useState('')

    const handleInputChange = (e)=>{
        e.preventDefault() // ---> ! PREGUNTAR
        setName(e.target.value)
        console.log(name);
        
    }
    
    const handleSubmit = (e)=>{
        e.preventDefault();
        dispatch(getRecipeByName(name))
    }

    const loadRecipes = (e)=>{
        dispatch(getRecipes(e))
    }

    return(
        <div>
            <input
                className={s.search}
                type='text'
                placeholder='Buscar receta...'
                onChange={(e)=> handleInputChange(e)}
            />
            <button
                className={s.searchh}
                type="submit"
                onClick={(e)=> handleSubmit(e)}
            >   Buscar
            </button>

            <button 
                className={s.refresh}
                onClick={(e)=> loadRecipes(e)}> Volver a cargar Recetas</button>

        </div>
    )
}

export default Searchbar;