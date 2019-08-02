// Requires o librerias personalizadas
var express = require('express');
var mongoose = require('mongoose');

// Inicializar variables
var app = express();

// Conesión a la base de datos
mongoose.connection.openUri('mongodb://localhost:27017/controlCuentasDB', (err, resp) => {

  if(err) throw err;

  console.log('Base de datos corriendo en el puerto 3001: \x1b[32m%s\x1b[0m', 'online');

});

// Rutas
app.get('/', (req, resp, next) => {

  resp.status(200).json({
    ok: true,
    mensaje: 'Petición realizada correctamente'
  });
});

// Escuchar peticiones
app.listen(3001, () => {
  console.log('Express server corriendo en el puerto 3001: \x1b[32m%s\x1b[0m', 'online');
});
