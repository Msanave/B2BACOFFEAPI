const router = require('express').Router();
const productorOperations = require('../operation/productor.operations');

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

router.get('/', productorOperations.getProductores);
router.get('/:id', productorOperations.getProductor);
router.post('/', productorOperations.crearProductor);
router.put('/:id', productorOperations.actualizarProductor);
router.delete('/id', productorOperations.borrarProductor);

module.exports = router