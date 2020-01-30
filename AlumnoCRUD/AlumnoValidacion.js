const { check } = require('express-validator');
const alumno = require('../Modelos/Alumno');

const alumnoValidador =[
    check('nombre').exists().withMessage("El nombre no puede estar en blanco"),
    check('apellido').exists().withMessage("El nombre no puede estar en blanco"),
    check('dni').isNumeric().withMessage("El dni debe ser numérico"),
    check('direccion').exists().withMessage("La direccion no puede estar en blanco"),
    check('nota').isNumeric().withMessage("La nota debe ser numérica")
]

module.exports = { alumnoValidador };
