app.controller("queryCtrl", ["Share", queryCtrl]);

function queryCtrl(Share){
	var vm = this;
	// vm.processos = Share.get("processos");

	var formatDate = function(obj){
		for (var key  in obj){
			if(typeof(obj[key]) != 'object' && typeof(obj[key]) === 'string' ){
				if (obj[key].search(/^\d.*T.*Z$/i) === 0){
					obj[key] = new Date(obj[key]);
				}	
			}
			else{
				formatDate(obj[key]);
			}
		}
		return obj;
    }

	vm.getRegister = function(){
		Share.getCadastro()
			.then(function(response){
				vm.processos = response.data;
			});
	};

	vm.removeRegister = function(id){
		Share.removeCadastro(id)
			.then(function(response){
				console.log(response.data);
				vm.getRegister();
			})
	};
	
	vm.editRegister = function(register) {
		console.log(register);
		Share.updateCadastro(register._id, register)
			.then(function(response){
				delete vm.processo;
				console.log(response.data);
			});
			vm.getRegister();
	};


	vm.getIdRegister = function(id) {
		Share.getIdCadastro(id)
			.then(function(response){
				vm.processo = formatDate(response.data);
			});
	};





	vm.getRegister();
    


}
