app.controller("queryCtrl", ["Share", queryCtrl]);

function queryCtrl(Share){
	var vm = this;
	// vm.processos = Share.get("processos");
	

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
				vm.processo = response.data;
			});
	};


	vm.getRegister();


	vm.fixDate = function(date){
		date = date.split("/");
		vm.processo.entreada = new Date(date[2],date[1],date[0]);
	}
}
