const {Router} = require('express');
const router = Router();

const {getDiets} = require('../handlers/dietsHandler')

router.get('/', getDiets);

module.exports = router;