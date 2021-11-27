const router = require('express').Router();
const ingresoOperations = require('../operation/ingreso.operations');

/*
	Archivo de operaciones
	-----------------------------------------
	const operacion = require('<ARCHIVO DE OPERACIONES>');

	Ruta base
	-----------------------------------------
	'/api/productor'

	Puntos de conexión (endpoints)
	-----------------------------------------
	crear un dato: 				post('/',      operacion.metodo)
	obtener todos los datos: 	get('/',       operacion.metodo)
	obtener un dato: 			get('/:id',    operacion.metodo)
	modificar un dato: 			put('/:id',    operacion.metodo)
	eliminar un dato: 			delete('/:id', operacion.metodo)
*/

router.get('/', ingresoOperations.getIngresos);
router.get('/:id', ingresoOperations.getIngreso);
router.post('/', ingresoOperations.crearIngreso);
router.put('/:id', ingresoOperations.actualizarIngreso);
router.delete('/id', ingresoOperations.borrarIngreso);

module.exports = router