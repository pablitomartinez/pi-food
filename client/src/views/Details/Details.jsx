import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getRecipeDetail } from "../../redux/actions";

const Details = (props) =>{

    const dispatch = useDispatch()
    
    const id = props.match.params.id;
    
    console.log(id);
    
    useEffect(()=>{
        dispatch(getRecipeDetail(id))
    }, [dispatch, id]);

    const detail = useSelector(state => state.recipeDetails);
    console.log(detail);
    return(
        <>
            estas en DETAILS
        <p>{props.match.params.id}</p>
        </>
    )
}

export default Details