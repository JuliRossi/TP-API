const { body } = require('express-validator');
const curso = require('../Modelos/Curso');
const alumnoValidador = require('../AlumnoCRUD/AlumnoValidacion');

const cursoValidador= [
    body('idCurso','El campo id debe ser numérico').isNumeric().bail(),
    body('añoDeDictado','El campo añoDeDictado debe ser numérico').isNumeric().bail(),
    body('tema','El tema del curso no puede estar en blanco').exists().bail(),
    body('duracion','El campo añoDeDictado debe ser numérico').isNumeric().bail()
];


module.exports = { cursoValidador };
