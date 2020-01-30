const cursoRouter = require('express').Router();// Express detecta este objeto como router

const { postCurso, deleteCurso, getCurso } = require('./CursoController');
//const { postCursoValidador } = require('./CursoValidacion');
//cursoRouter.get('/', getCurso)
cursoRouter.post('/',postCurso);
cursoRouter.delete('/:idCurso', deleteCurso);// El Curso a borrar
cursoRouter.get('/',getCurso);
cursoRouter.get()


 module.exports = cursoRouter;