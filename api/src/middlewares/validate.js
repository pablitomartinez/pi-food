// middleware que evita errores en la BD,
// evita que se cree en la base datos
// protege BD
const validate = (req, res, next) =>{
    const {name, summary, stepByStep} = req.body;

    if(!name) return res.status(400).json({error: "Missing Name"})
    if(!summary) return res.status(400).json({error: "Missing summary"})
    if(!stepByStep) return res.status(400).json({error: "Missing stepByStep"})


    next()
}

module.exports = {
    validate
}