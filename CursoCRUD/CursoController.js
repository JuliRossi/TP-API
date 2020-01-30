const curso = require('../Modelos/Curso');

const { validationResult } = require('express-validator'); //Sirve para usar check

const getCurso= (req,res,next) =>{
    const query = req.query || {};

    curso.find(query).limit(10)
        .then(cursos => {
            res.status(200).json({
                code: 0,
                message: cursos
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

//const getCurso

const postCurso = (req, res, next) => {
    const errores = validationResult(req);

    if (!errores.isEmpty()) {
        return res.status(400).json({
            code: 10,
            message: errores.array()
        })
    }

    const body = req.body;

    const nuevoCurso = new curso({
        idCurso : body.id,
        añoDeDictado: body.añoDeDictado,
        duracion: body.duracion,
        tema: body.tema,
        alumnos: body.alumnos

    });
  
    nuevoCurso.save()
        .then(
            created => {
                res.status(201).json({
                    code: 0,
                    menssage: created
                });
            }
        ).catch(
            err => {
                res.status(500).json({
                    code: 0,
                    menssage: "Ocurrió un error con un modulo interno"
                });
            }
        )

};

const deleteCurso = (req, res, next) => {
    const id = req.params.idCurso;

    curso.findByIdAndDelete(idCurso)
        .then(() => {
            res.status(200).json({
                code: 0,
                message: "Curso eliminado correctamente"
            })
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                code: 20,
                message: "Ocurrió un error con un módulo interno"
            });
        })
};

module.exports = { getCurso,postCurso, deleteCurso};