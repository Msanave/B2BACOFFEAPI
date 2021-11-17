const coleccionCompradores = require('../schemas/comprador.schema')
const compradorOperations =  {};

compradorOperations.getCompradores = async function(req, res){
	const comprador =  await coleccionCompradores.find();
	res.json(compradores);
}

compradorOperations.getComprador = async function(req, res){
	const comprador =  await coleccionCompradores.findById(req.params.id);
	res.json(comprador);
}

compradorOperations.crearComprador = async function(req, res){
	const comprador =  new coleccionCompradores(req.body);
	await comprpador.save();
	res.json({"status":"Dato de comprador guardado"});
}

compradorOperations.actualizarComprador = async function(req, res){
	const {id} = req.params;
	const comprador={
		nombres:req.body.nombres,
		apellidos: req.body.nombres,
		documento:{
			tipo: req.body.documento.tipo,
			numero: req.body.documento.numero
		}
	}
	console.log(comprador)
	await coleccionCompradores.findByAndUpdate(req.params.id,{$set:comprador},{new: true});
	res.json({"status":"Dato de comprador actualizado"});
}

compradorOperations.borrarComprador= async function(req, res){
	await coleccionCompradores.findByAndRemove(req.params.id)
	res.json({"status":"Dato de comprador borrado"});
}

module.exports=compradorOperations
