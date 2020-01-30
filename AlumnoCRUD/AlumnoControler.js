const alumno = require('../Modelos/Alumno')

const body = req.body ;

const nuevoAlumno = new alumno ({
    nombre : body.nombre,
    apellido : body.apellido,
    dni : body.dni,
    direccion : body.direccion,
    nota : body.nota 
});

