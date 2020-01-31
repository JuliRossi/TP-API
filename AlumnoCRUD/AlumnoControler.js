const alumno = require('../Modelos/Alumno')
const curso = require('../Modelos/Curso')

//onst body = req.body ;
/*
const nuevoAlumno = new alumno ({
    nombre : body.nombre,
    apellido : body.apellido,
    dni : body.dni,
    direccion : body.direccion,
    nota : body.nota 
});
*/
const getAlumno= (req, res, next) => {
    const idCurso = req.params.idCurso
    curso.find({ "idCurso": idCurso})
        .then(alumno => {
            res.status(200).json({
                code: 12,
                message: alumno
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                code: 20,
                message: "Ocurrió un error con un módulo interno"
            });
        })
};

const  getAlumnoDestacado = (req, res, next) => {
    const idCurso = parseInt(req.params.idCurso);
    
    curso.aggregate([
        { $match : { "idCurso": idCurso }},
        { $project: { "alumnos": 1 } },
        { $unwind: "$alumnos" },
        { $sort: { nota: -1 } },
        { $limit:1 }])
        .then(alumno => {
            res.status(200).json({
                code: 12,
                message: alumno
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                code: 20,
                message: "Ocurrió un error con un módulo interno"
            });
        })
};


module.exports = { getAlumno, getAlumnoDestacado };