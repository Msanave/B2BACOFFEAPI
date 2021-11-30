const coleccionIngresos = require('../schemas/ingreso.schemas')
const ingresoOperations =  {};

ingresoOperations.getIngresos = async function(req, res){
	try{
	const ingresos =  await coleccionIngresos.find();
	res.status(200).json(ingresos);
	}
	catch(err){
		res.status(404).json({message:err})
	}
}


ingresoOperations.getIngreso = async function(req, res){
	try{
	const ingreso =  await coleccionIngresos.findById(req.params.id);
	if(ingreso==null) {
	res.status(404).json({message:"Not found"})
	}
	else{
		res.status(200).json(ingreso);
		}
	}
	catch(err) {
		res.status(400).json({message:"Bad request"})
	}		
}


ingresoOperations.crearIngreso = async function(req, res){
	try{
		const ingreso =  new coleccionIngresos(req.body);
		await ingreso.save();
		res.status(201).json({ingreso})
		}
	catch(err){
		res.status(400).json({message:"Bad request", errorMssg: err})
	}	
}

ingresoOperations.actualizarIngreso = async function(req, res){
	try{
	const {id} = req.params;
	const ingreso={
		rol:{
            Productor:req.body.Productor,
            Comprador: req.body.Comprador
        },
        nombres:req.body.nombres,
		apellidos: req.body.nombres,
		celular: req.body.celular,
        correo: req.body.correo
		}


	await coleccionIngresos.findByAndUpdate(req.params.id,{$set:ingreso},{new: true});
	res.status(200).json({ingreso});
    }
	catch(err){
	res.status(200).json({message: err.message})
}
}

ingresoOperations.borrarIngreso= async function(req, res){
	try{
	await coleccionIngresos.findByAndRemove(req.params.id)
res.status(200).json({message:"Delete OK"});
}
catch(err){
	res.status(404).json({message: err.message})
}	
}

module.exports=ingresoOperations
