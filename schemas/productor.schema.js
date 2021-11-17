const mongoose= require ('mongoose');
const {Schema} =mongoose;

const productorSchema = new Schema({
	id:{type:String, required: true},
	nombre:{type:String, required: true},
	documento:{type:Number, unique : true, required: true, dropDups: true},
	pais:{type:Array, required: true},
	departamento:{type:Array, required: true},
	municipio:{type:Array, required: true},
	direccion:{type:String, required: true},
	nombrePredio: {type:String, required: true},
	alturaCultivo:{type:Number, required: true},
	correo:{type:String, required: true},
	celular:{type:Number, required: true},
	tipoProducto:{type:String, required: true},
	calidad: {type:Boolean, required: true},
	puntaje: {type:Number, required: true},
	cantidadProducto: {type:Number, required: true},
	valorunitario:{type:Number, required: true},
	descripcion: {type:String, required: true},
});

module.exports=mongoose.model('Productor',productorSchema);