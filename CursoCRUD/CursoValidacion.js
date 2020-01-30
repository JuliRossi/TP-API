const { check } = require('express-validator');
const curso = require('../Modelos/Curso');
const alumnoValidador = require('../AlumnoCRUD/AlumnoValidacion');

const cursoValidador= [
    check('idCurso').isNumeric().withMessage("El campo id debe ser numérico"),
    check('añoDeDictado').isNumeric().withMessage("El campo añoDeDictado debe ser numérico"),
    check('tema').exists().withMessage("El tema del curso no puede estar en blanco"),
    check('duracion').isNumeric().withMessage("El campo añoDeDictado debe ser numérico"),
];

module.exports = { cursoValidador };
