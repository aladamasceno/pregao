var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// var PersonsSchema = new Schema({
// 	nome: {type: String},
// 	funcao: {type: String},
// 	mat: {type: String}

// })


var CadastroSchema = new Schema({
	unidade: {type: String},
	entrada: {type: Date},
	erros: {type: String},
	providencias: {type: String},
	saeb: {
		saida: {type: Date},
		oficio: {type: String},
		retorno: {type: Date}
	},
	ug: {
		retorno: {type: Date},
		oficio: {type: String}
	},
	servidor:{
		vigencia:{
			inicio: {type: Date},
			termino: {type: Date}
		},
		persons: [{
					nome: {type: String},
					funcao: {type: String},
					mat: {type: String},
					erros: [String]
				}]

	}

});

module.exports = mongoose.model("cadastro", CadastroSchema)