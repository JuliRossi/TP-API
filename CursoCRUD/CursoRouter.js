const cursoRouter = require('express').Router();// Express detecta este objeto como router

const { postCurso, deleteCurso, getCursos } = require('./CursoController');
const { getAlumnos, getAlumnoDestacado }= require('../AlumnoCRUD/AlumnoControler')
const { cursoValidador  } = require('./CursoValidacion');

cursoRouter.post('/',cursoValidador , postCurso);
cursoRouter.delete('/:idCurso', deleteCurso);// El Curso a borrar
cursoRouter.get('/',getCursos);
cursoRouter.get('/:idCurso/alumnos',getAlumnos)
cursoRouter.get('/:idCurso/alumnoDestacado', getAlumnoDestacado)


 module.exports = cursoRouter;