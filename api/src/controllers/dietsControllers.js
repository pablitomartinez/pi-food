const { Diet } = require ('../db')

const dietsTypes = ['gluten free', 'ketogenic', 'vegetarian', 'lacto vegetarian','ovo vegetarian', 'lacto ovo vegetarian', 'vegan', 'pescetarian', 'paleolithic', 'primal', 'low fodmap', 'whole 30', 'dairy free'];

const getAllDiets = async ()=>{

    dietsTypes.forEach(diet =>{
        Diet.findOrCreate({
            where: { name : diet }
        })
    })
    const allTypes = await Diet.findAll()
    // console.log('TODOS LOS TYPES',allTypes);
    return allTypes
}

module.exports = {
    getAllDiets
}
