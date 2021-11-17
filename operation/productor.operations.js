const coleccionProductores = require('../schemas/productor.schema')
const productorOperations =  {};

productorOperations.getProductores = async function(req, res){
	const productores =  await coleccionProductores.find();
	res.json(productores);
}

productorOperations.getProductor = async function(req, res){
	const productor =  await coleccionProductores.findById(req.params.id);
	res.json(productor);
}

productorOperations.crearProductor = async function(req, res){
	console.log(req.body);
	const productor =  new coleccionProductores(req.body);
	await productor.save();
	res.json({"status":"Dato de productor guardado"});
}

productorOperations.actualizarProductor = async function(req, res){
	const {id} = req.params;
	const productor={
		nombres:req.body.nombres,
		apellidos: req.body.nombres,
		documento:{
			tipo: req.body.documento.tipo,
			numero: req.body.documento.numero
		}
	}
	console.log(productor)
	await coleccionProductores.findByAndUpdate(req.params.id,{$set:productor},{new: true});
	res.json({"status":"Dato de productor actualizado"});
}

productorOperations.borrarProductor= async function(req, res){
	await coleccionProductores.findByAndRemove(req.params.id)
	res.json({"status":"Dato de productor borrado"});
}

module.exports=productorOperations
