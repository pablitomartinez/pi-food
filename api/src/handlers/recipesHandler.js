const getRecipesApi = (req,res) => {
    const {name} = req.query

    if(name){
        res.send(`receta correspondiente a ${name}`)
    } 
    res.send('get de todas las recetas')

}

const getDbRecipes = (req,res) => {
    res.status(200).send('traigo las recipes de la BD')
}

const getRecipeById = (req,res) => {
    const {id} = req.params


    res.status(200).send(`estoy en detail de receta con id ${id}`)
}

const createRecipe = (req,res) => {
    const {name, summary, healthScore, stepByStep } = req.body

    res.status(200).send(`estoy creando una recete con el nombre: ${name}, summary: ${summary}, healthScore: ${healthScore} y su ${stepByStep}`)
}

module.exports = {
    getRecipesApi, 
    getDbRecipes, 
    getRecipeById, 
    createRecipe
}