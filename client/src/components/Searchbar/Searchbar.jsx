import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { getRecipeByName } from '../../redux/actions';

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

    return(
        <div>
            <input
                type='text'
                placeholder='Buscar...'
                onChange={(e)=> handleInputChange(e)}
            />
            <button
                type="submit"
                onClick={(e)=> handleSubmit(e)}
            >   Buscar
            </button>

        </div>
    )
}

export default Searchbar;