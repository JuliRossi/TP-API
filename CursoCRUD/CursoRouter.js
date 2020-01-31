const cursoRouter = require('express').Router();// Express detecta este objeto como router

const { postCurso, deleteCurso, getCurso } = require('./CursoController');
const { getAlumno, getAlumnoDestacado }= require('../AlumnoCRUD/AlumnoControler')
//const { postCursoValidador } = require('./CursoValidacion');
//cursoRouter.get('/', getCurso)
cursoRouter.post('/',postCurso);
cursoRouter.delete('/:idCurso', deleteCurso);// El Curso a borrar
cursoRouter.get('/',getCurso);
cursoRouter.get('/:idCurso/alumnos',getAlumno)
cursoRouter.get('/:idCurso/alumnoDestacado', getAlumnoDestacado)


 module.exports = cursoRouter;