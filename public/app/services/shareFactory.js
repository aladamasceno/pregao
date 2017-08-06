app.factory("Share", function($rootScope, $http){
	// var mem = [];



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




