const mongoose= require ('mongoose');
const {Schema} =mongoose;

const ingresoSchema = new Schema({
	rol: {type:String, required: true},
	nombre:{type:String, required: true},
    apellido:{type:String, required: true},
	tipoDocumento:{type:String, required: true},
	documento: {type:String, required: true},
	pais:{type:String, required: true},
    celular:{type:Number, required: true},
    correo:{type:String, required: true},
	contrasena:{type:String, required: true}
});

module.exports=mongoose.model('ingreso',ingresoSchema);

