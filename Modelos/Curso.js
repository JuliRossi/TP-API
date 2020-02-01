const mongoose = require('mongoose')

const alumno = require('./Alumno');

const curso = new mongoose.Schema({
    idCurso: { type: Number, unique: true },
    añoDeDictado: { type: Number },
    duracion: { type: Number }, // Tomo que se cuenta la duracion del curso en horas
    tema: { type: String },
    alumnos: {
        type: [alumno]
    }
}, { collection: 'curso' });
module.exports = mongoose.model('curso', curso)

