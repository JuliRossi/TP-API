const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const cursoRouter = require('./CursoCRUD/CursoRouter');

const app = express();
const port = process.env.PORT || 8080;

app.use(bodyParser.json());

app.use('/cursos', cursoRouter);

app.use('/', (req, res, next) => { res.status(200).json({code: 0, message: "Estás en la página de inicio"}) });

const mongoURI = process.env.MONGO_URI || "mongodb://localhost:27017/tp";

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
    .then(() => {
        app.listen(port, () => { console.log(`Corriendo en port ${port}`) })
    })
    .catch(err => {
    });
