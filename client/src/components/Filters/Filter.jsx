import filter from './Filter.module.css'
import { filterRecipesaByStatus, sortedRecipes } from '../../redux/actions'
import { useDispatch } from 'react-redux'
 

const Filter = ()=>{

    const dispatch = useDispatch()

    const handlerFilter = (e)=>{
        dispatch(filterRecipesaByStatus(e.target.value))
    }

	const handlerSort = (e)=>{
        dispatch(sortedRecipes(e.target.value))
    }

    return(
        <>
            <div className={filter.filterSort}>
				<div>
					<span>Sort:</span>
                    <select 
						onChange={e => handlerSort(e)}
						>
						<option value='All'>All</option>
						<option value='asc'>A-Z</option>
						<option value='des'>Z-A</option>
					</select>

					<span>Order: </span>
					<select >
						<option value='All'>All</option>
						<option value='high'>High</option>
						<option value='low'>Low</option>
						<option value='setenta'>+70</option>
					</select>
							
					<span>Filter By Diet: </span>
					<select
						className={filter.filterselect}
                        onChange={e => handlerFilter(e)}
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

				</div>
            </div>
        </>
    )
}

export default Filter