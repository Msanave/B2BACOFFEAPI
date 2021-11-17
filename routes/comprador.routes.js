const router = require('express').Router();
const compradorOperations = require('../operation/comprador.operations');

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

router.get('/', compradorOperations.getCompradores);
router.get('/:id', compradorOperations.getComprador);
router.post('/', compradorOperations.crearComprador);
router.put('/:id', compradorOperations.actualizarComprador);
router.delete('/id', compradorOperations.borrarComprador);

module.exports = router