const curso = require('../Modelos/Curso');

const { validationResult } = require('express-validator'); //Sirve para usar check


const postCurso = (req, res, next) => {
    const errores = validationResult(res);

    if (!errores.isEmpty()) {
        return res.status(400).json({
            code: 10,
            message: errores.array()
        })
    }
    const nuevoCurso = new curso({
        añoDeDictado: body.añoDeDictado,
        duracion: body.duracion,
        tema: body.tema,
        alumnos: body.alumnos

    });
    const body = req.body;

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

module.exports = {  postCurso };