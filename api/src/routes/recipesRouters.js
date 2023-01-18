const {Router} = require('express');
const router = Router();

router.get('/', (req,res)=>{
    res.status(200).send('estoy en el get de recipes')
});

router.get('/:id', (req,res)=>{
    res.status(200).send('estoy en detail por id de recipes')
});

router.post('/', (req,res)=>{
    res.status(200).send('creando una receta')
});

module.exports = router;

