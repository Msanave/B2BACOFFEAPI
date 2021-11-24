const coleccionProductores = require('../schemas/productor.schema')
const productorOperations =  {};

productorOperations.getProductores = async function(req, res){
	try{
	const productores =  await coleccionProductores.find();
	res.status(200).json(productores);
}
catch(err){
	res.status(404).json({message:err.message})
}
}

productorOperations.getProductor = async function(req, res){
	try{
	const productor =  await coleccionProductores.findById(req.params.id);
	if(productor!=null) {
		res.status(200).json({message: "Not found"})
	}
	else{
		res.status(404).json(productor);
	}
}
catch(err){
	res.status(400).json({message:"Bad request"})
	}
}

productorOperations.crearProductor = async function(req, res){
	try{
		const productor =  new coleccionProductores(req.body);
		await productor.save()
		res.status(201).json(productor)
		}
	catch(err){
		res.status(400).json({message:"Bad request"})
	}
}


productorOperations.actualizarProductor = async function(req, res){
	try{
	const {id} = req.params;
	const productor={
		nombres:req.body.nombres,
		apellidos: req.body.nombres,
		documento:{
			tipo: req.body.documento.tipo,
			numero: req.body.documento.numero
		}
	}
	await coleccionProductores.findByAndUpdate(req.params.id,{$set:productor},{new: true});
	res.status(200).json({Productor});
}
	catch(err){
	res.status(200).json({message:err.message})	
	}
}

productorOperations.borrarProductor= async function(req, res){
	try{
	await coleccionProductores.findByAndRemove(req.params.id)
	res.status(200).json({message: "Delete OK"});
}
catch(err){
	res.status(404).json({message:err.message})
}
}
module.exports=productorOperations
