const coleccionCompradores = require('../schemas/comprador.schema')
const compradorOperations =  {};

compradorOperations.getCompradores = async function(req, res){
	try{
	const compradores =  await coleccionCompradores.find();
	res.status(200).json(compradores);
	}
	catch(err){
		res.status(404).json({message:err.message})
	}
}


compradorOperations.getComprador = async function(req, res){
	try{
	const comprador =  await coleccionCompradores.findById(req.params.id);
	if(comprador==null) {
	res.status(404).json({message:"Not found"})
	}
	else{
		res.status(200).json(comprador);
		}
	}
	catch(err) {
		res.status(400).json({message:"Bad request"})
	}		
}


compradorOperations.crearComprador = async function(req, res){
	try{
		const comprador =  new coleccionCompradores(req.body);
		await comprador.save();
		res.status(201).json({message:"Bad request"})
		}
	catch(err){
		res.status(400).json({message: "Bad request"})
	}	
}

compradorOperations.actualizarComprador = async function(req, res){
	try{
	const {id} = req.params;
	const comprador={
		nombres:req.body.nombres,
		apellidos: req.body.nombres,
		documento:{
			tipo: req.body.documento.tipo,
			numero: req.body.documento.numero
		}
	}

	await coleccionCompradores.findByAndUpdate(req.params.id,{$set:comprador},{new: true});
	res.status(200).json({Comprador});
}
	catch(err){
	res.status(200).json({message: err.message})
}
}

compradorOperations.borrarComprador= async function(req, res){
	try{
	await coleccionCompradores.findByAndRemove(req.params.id)
res.status(200).json({message:"Delete OK"});
}
catch(err){
	res.status(404).json({message: err.message})
}	
}

module.exports=compradorOperations
