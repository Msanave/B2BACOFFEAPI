const mongoose = require('mongoose');
const database = "b2bcoffeDB";
const password = "admin";
const URI = 'mongodb+srv://admin:'+password+'@cluster0.5nvml.mongodb.net/'+database+'?retryWrites=true&w=majority';

mongoose.connect(URI)
	.then(db => console.log("Atlas en linea"))
	.catch(err=> console.err(err))

module.exports = mongoose;