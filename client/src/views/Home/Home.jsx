import CardsContainer from "../../components/CardsContainer/CardsContainer"
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRecipes } from "../../redux/actions";


const Home =() =>{
    const dispatch = useDispatch();

    const allRecipes = useSelector(state => state.recipes) 
    console.log('ALL RECIPES', allRecipes);

    useEffect(()=>{
        dispatch(getRecipes())
    }, [])
    
    // -PAGINADO-
    // pag actual
    const [currentPage, setCurrentPage] = useState(1);
    //recetas por pag 9 
    const [recipeForPage, setRecipeForPage] = useState(9)
    // indice de la ultima receta
    const indexOfLastRecipe = currentPage * recipeForPage // 9
    // indie de la primera receta
    const indexOfFirstRecipe = indexOfLastRecipe - recipeForPage // 0
    // recetas de la pagina actual
    const currentRecipes = allRecipes.slice(indexOfFirstRecipe, indexOfLastRecipe)

    const paginado = (pageNumber) =>{
        setCurrentPage(pageNumber)
    }


    

    return(
        <>
        <h1>estas en HOME</h1>
        <CardsContainer/>
        </>
    )
}

export default Home