const cursoRouter = require('express').Router();// Express detecta este objeto como router

const { postCurso, deleteCurso, getCurso } = require('./CursoController');
const { getAlumno, getAlumnoDestacado }= require('../AlumnoCRUD/AlumnoControler')
const { cursoValidador  } = require('./CursoValidacion');

cursoRouter.post('/',cursoValidador , postCurso);
cursoRouter.delete('/:idCurso', deleteCurso);// El Curso a borrar
cursoRouter.get('/',getCurso);
cursoRouter.get('/:idCurso/alumnos',getAlumno)
cursoRouter.get('/:idCurso/alumnoDestacado', getAlumnoDestacado)


 module.exports = cursoRouter;