import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRecipes } from "../../redux/actions";
import CardsContainer from "../../components/CardsContainer/CardsContainer";
import Paginado from "../../components/Paginated/Paginado";
import Filter from "../../components/Filters/Filter";
import Searchbar from "../../components/Searchbar/Searchbar";



const Home =() =>{
    const dispatch = useDispatch();

    const allRecipes = useSelector(state => state.recipes) 
    // console.log('ALL RECIPES', allRecipes);

    useEffect(()=>{
        dispatch(getRecipes())
    }, [])
    // -ORDEN ALFABETICO-
        // estado local vacio, modifica el estado local y se renderiza
    const [ order, setOrder] = useState('')
    // -PAGINADO-
    // pag actual - set pag actual
    const [currentPage, setCurrentPage] = useState(1);
    //recetas por pag 9 
    const [recipeForPage, setRecipeForPage] = useState(9)
    // indice de la ultima receta ---> 9 * 1
    const indexOfLastRecipe = currentPage * recipeForPage // 9
    // indie de la primera receta
    const indexOfFirstRecipe = indexOfLastRecipe - recipeForPage // 0
    // recetas de la pagina actual
        // 
    const currentRecipes = allRecipes.slice(indexOfFirstRecipe, indexOfLastRecipe)
    console.log('RECETAS ACTUALES-->',currentRecipes);

    const paginado = (pagNumber) =>{
        setCurrentPage(pagNumber)
    }

    const loadRecipes = (e)=>{
        dispatch(getRecipes(e))
    }

    // console.log('COMPONENTE PAGINADO',paginado);


        // <Paginado 
        //     recipeForPage={recipeForPage}
        //     allRecipes = {allRecipes.length}
        //     paginado= {paginado}
        //     />
    return(
        <>
        <Searchbar/>
        <button 
            onClick={(e)=> loadRecipes(e)}
         >Volver a cargar Recetas</button>
        <Filter
            setCurrentPage={setCurrentPage}
            setOrder={setOrder}
        />
        <CardsContainer
            currentRecipes={currentRecipes}
            recipeForPage={recipeForPage}
            allRecipes = {allRecipes}
            paginado= {paginado}
        />
        </>
    )
}

export default Home