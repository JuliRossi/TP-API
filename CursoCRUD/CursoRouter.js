const cursoRouter = require('express').Router();// Express detecta este objeto como router

const {  postCurso } = require('./CursoController');
cursoRouter.post('/',postCurso)