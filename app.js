// Importaciones
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencodedS
require('dotenv').config();
const path = require('path');
const express = require('express');
const sitioRouter = require('./routes/SitioRouter');

// Variables
const app = express();
const port = process.env.PORT || 3001;

// Configuraciones del servidor
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use('/', sitioRouter);

// Levantar el servidor
app.listen(port, () => {
    console.log(`server is running on http://127.0.0.1:${port}`);
});