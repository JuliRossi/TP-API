const { body } = require('express-validator');
const alumno = require('../Modelos/Alumno');

const alumnoValidador =
    [  
        body('*.nombre').exists().withMessage("El nombre no puede estar en blanco"),
        body('*.apellido').exists().withMessage("El nombre no puede estar en blanco"),
        body('*.dni').isNumeric().withMessage("El dni debe ser numérico"),
        body('*.direccion').exists().withMessage("La direccion no puede estar en blanco"),
        body('*.nota').isNumeric().withMessage("La nota debe ser numérica")

];

module.exports = { alumnoValidador };
