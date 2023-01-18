const {Router} = require('express');
const router = Router();

router.get('/', (req,res)=>{
    res.status(200).send("estoy en ruta de GET diets")
});

module.exports = router;