app.factory("Share", function($rootScope, $http){
	// var mem = [];

	// var processos = [
	// 	{	
	// 		unidade: "0002",
	// 		entrada: new Date(),
	// 		erros: "erro 01",
	// 		providencias: "providencia 01",
	// 		saeb: {
	// 			saida: new Date(),
	// 			oficio: "oficio saeb 01",
	// 			retorno: new Date()
	// 		},
	// 		ug: {
	// 			retorno: new Date(),
	// 			oficio: "oficio ug 01"
	// 		}
	// 	},
	// 	{
	// 		unidade: "0003",
	// 		entrada: new Date(),
	// 		erros: "erro 02",
	// 		providencias: "providencia 02",
	// 		saeb: {
	// 			saida: new Date(),
	// 			oficio: "oficio saeb 02",
	// 			retorno: new Date()
	// 		},
	// 		ug: {
	// 			retorno: new Date(),
	// 			oficio: "oficio ug 02"
	// 		}
	// 	},
	// 	{
	// 		unidade: "0004",
	// 		entrada: new Date(),
	// 		erros: "erro 03",
	// 		providencias: "providencia 03",
	// 		saeb: {
	// 			saida: new Date(),
	// 			oficio: "oficio saeb 03",
	// 			retorno: new Date()
	// 		},
	// 		ug: {
	// 			retorno: new Date(),
	// 			oficio: "oficio ug 03"
	// 		}
	// 	},


	// ];

	// mem["processos"] = processos

	
		return {
			// store: (key, value) => { 
			// 	mem[key] = value
			// },
			// get: (key) => {
			// 	return mem[key]
			// },
			getCadastro: function(){
				 return $http.get("/cadastro/")
			},
			getIdCadastro: function(id){
				 return $http.get("/cadastro/"+id)
			},
			saveCadastro: function(register){
				return $http.post("/cadastro/", register);
			},
			removeCadastro: function(id, register){
				return $http.delete("/cadastro/"+id)
			},
			updateCadastro: function(id, register){
				return $http.put("/cadastro/"+id, register);
			}
		}
	
		// return {
		
		// 	getCadastro: function(){
		// 		 return $http.get("https://radiant-sea-38939.herokuapp.com/cadastro/")
		// 	},
		// 	getIdCadastro: function(id){
		// 		 return $http.get("https://radiant-sea-38939.herokuapp.com/cadastro/"+id)
		// 	},
		// 	saveCadastro: function(register){
		// 		return $http.post("https://radiant-sea-38939.herokuapp.com/", register);
		// 	},
		// 	removeCadastro: function(id, register){
		// 		return $http.delete("https://radiant-sea-38939.herokuapp.com/"+id)
		// 	},
		// 	updateCadastro: function(id, register){
		// 		return $http.put("https://radiant-sea-38939.herokuapp.com/"+id, register);
		// 	}
		// }



});




