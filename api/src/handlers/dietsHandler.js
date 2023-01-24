const { Diet } = require ('../db');
const {getAllDiets} = require('../controllers/dietsControllers');

const getDiets = async (req,res)=>{
    

    try {
        const getTypes = await getAllDiets()
        // console.log('TODOS LOS TYPES',getTypes);
        const getAllTypes = await getTypes.map(e => e.name)
        res.status(200).send(getAllTypes)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = {
    getDiets
}