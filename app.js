// Requires
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

// Inicializar variables
var app = express();

// Body Parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Importar rutas
var appRoutes = require('./routes/app');
var usuarioRoutes = require('./routes/usuario');
var loginRoutes = require('./routes/login');

// Conesión a la base de datos
mongoose.connection.openUri('mongodb://localhost:27017/controlCuentasDB', (err, resp) => {

  if(err) throw err;

  console.log('Base de datos corriendo en el puerto 3001: \x1b[32m%s\x1b[0m', 'online');

});

// Rutas
app.use('/usuario', usuarioRoutes);
app.use('/login', loginRoutes);
app.use('/', appRoutes);

// Escuchar peticiones
app.listen(3001, () => {
  console.log('Express server corriendo en el puerto 3001: \x1b[32m%s\x1b[0m', 'online');
});
