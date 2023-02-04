import filter from './Filter.module.css'
import { filterRecipesaByDiets, sortedRecipes, sortScore } from '../../redux/actions'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
 

const Filter = ({ setCurrentPage, setOrder})=>{

    const dispatch = useDispatch()

    const handlerFilterByDiets = (e)=>{
        dispatch(filterRecipesaByDiets(e.target.value))
    }

	const handlerSort = (e)=>{
		e.preventDefault(); //----> ! REVISAR
        dispatch(sortedRecipes(e.target.value))
		setCurrentPage(1)
		// seteo para ordenar de tal forma
		setOrder(`Ordenado ${e.target.value}`)
    }

	const handleScoreSort = (e)=>{
		dispatch(sortScore(e.target.value))
		setCurrentPage(1)
		setOrder(`Ordenado ${e.target.value}`)
	}

    return(
        <>
            <div className={filter.filterSort}>
				<div>
					<span>Sort:</span>
                    <select 
						onChange={e => handlerSort(e)}
						className={filter.filterselect}
						>
						<option value='All'>All</option>
						<option value='asc'>A-Z</option>
						<option value='des'>Z-A</option>
					</select>

					<span>Order: </span>
					<select 
						onChange={e => handleScoreSort(e)}
						className={filter.filterselect}
						>
						<option value='All'>Health Score</option>
						<option value='unhealthy'>Healthy +50</option>
						<option value='healthy'>Unhealthy -50</option>
						
					</select>
							
					<span>Filter By Diet: </span>
					<select
						className={filter.filterselect}
                        onChange={e => handlerFilterByDiets(e)}
					>
						<option value='All'>All</option>
						<option value='gluten free'>Gluten Free</option>
						<option value='dairy free'>Ketogenic</option>
						<option value='vegetarian'>Vegetarian</option>
						<option value='lacto ovo vegetarian'>
							Lacto-Vegetarian
						</option>
						<option value='lacto ovo vegetarian'>
							Ovo-Vegetarian
						</option>
						<option value='vegan'>Vegan</option>
						<option value='pescatarian'>Pescetarian</option>
						<option value='paleolithic'>Paleo</option>
						<option value='primal'>Primal</option>
						<option value='whole 30'>Whole30</option>;
					</select>

					<Link to={'/create'}>
						<input type='button' value='Crear Receta'/>
					</Link>

				</div>
            </div>
        </>
    )
}

export default Filter