const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require('./conexion');
const app = express();

//Configuración
app.set('port', process.env.PORT || 3000)
app.use(morgan('dev'))
app.use(cors())
app.use(express.json())

//Lista de rutas base
app.use('/api/productor', require('./routes/productor.routes'));
app.use('/api/comprador', require('./routes/comprador.routes'));



//Arranque
app.listen(app.get('port'), ()=> {
	console.log(process.env.npm_package_name + " iniciado en puerto "+ app.get('port'))
});