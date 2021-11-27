const mongoose= require ('mongoose');
const {Schema} =mongoose;

const ingresoSchema = new Schema({
	rol:[{
        Productor: {type:String, required: true},
        Comprador: {type:String, required: true}
    }],
	nombre:{type:String, required: true},
    apellido:{type:String, required: true},
	documento: {
		tipo: [{
			CC: {type:String, required: true},
			CE: {type:String, required: true},
			}],
		numero: {type:String, required: true},
	},
	pais:{type:Array, required: true},
    celular:{type:Number, required: true},
    correo:{type:String, required: true},
	contrasena:{type:String, required: true}

});

module.exports=mongoose.model('ingreso',ingresoSchema);

