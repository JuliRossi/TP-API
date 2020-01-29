const mongoose = require('mongoose')

const alumno = require('./Modelos/Alumno');

const curso = new mongoose.Schema({
    añoDeDictado: { type: Number },
    duracion: { type: String },
    tema: { type: String },
    alumnos: {
        type: [alumno],
        default: undefined
    }
});
module.exports = curso

