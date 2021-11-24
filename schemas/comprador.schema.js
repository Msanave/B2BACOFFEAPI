const mongoose= require ('mongoose');
const {Schema} =mongoose;

const compradorSchema = new Schema({
	codigoComprador:{type:String, required: true},
	nombre:{type:String, required: true},
	documento:{type:Number, required: true},
	documento: {
		tipo: [{
			CC: {type:String, required: true},
			CE: {type:String, required: true},
			}],
		numero: {type:String, required: true},
	},
	pais:{type:Array, required: true},
	departamento:{type:Array, required: true},
	municipio:{type:Array, required: true},
	direccion:{type:String, required: true},
	celular:{type:Number, required: true},
	tipoProducto:{type:String, required: true},
	cantidadProducto: {type:Number, required: true},
	valorunitario:{type:Number, required: true},
	valortotal:{type:Number, required: true},
	compra_id:{type:Number, required: true},
});

module.exports=mongoose.model('Comprador',compradorSchema);
