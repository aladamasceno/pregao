app.controller("cadastroCtrl", ["Share", "$timeout", function cadastroCtrl(Share, $timeout){
	

	var vm = this;

	vm.errors = ["AUSÊNCIA de ofício de solicitação",
				"AUSÊNCIA/ERROR termo de nomeação",
				"AUSÊNCIA do documento de identificação",
				"AUSÊNCIA do comprovante de residência",
				"AUSÊNCIA de nomeação DOE",
				"AUSÊNCIA certificado de pregoeiro"];

	vm.errors2 = [{id:"de ofício de solicitação"},
				{id:"de termo de nomeação"},
			{id:"do documento de identificação"},
			{id:"do comprovante de residência"},
			{id:"de nomeação DOE"},
			{id:"do certificado de pregoeiro"}
			]
			;

	vm.funcao = ["Gestor", "Pregoeiro", "Apoio", "Pregoeiro-Apoio"];

	vm.units = [
		{und: "1º BPM",cod: "0002"},	{und: "2º BPM",cod: "0003"},			{und: " 4º BPM",cod: "0005"},
		{und: "5º BPM",cod: "0006"},	{und: " 6º BPM",cod: "0007"},			{und: "7º BPM",cod: "0008"},
		{und: "8º BPM",cod: "0009"},	{und: "10º BEIC ",cod: "0011"},			{und: "11º BPM",cod: "0012"},
		{und: "12º BPM",cod: "0013"},	{und: "13º BPM",cod: "0014"},			{und: "13 BEIC",cod: "0014"},
		{und: "14º BPM",cod: "0015"},	{und: "15º BPM",cod: "0016"},			{und: "16º BPM",cod: "0017"},
		{und: "17º BPM",cod: "0018"},	{und: "CG",cod: "0019"},				{und: "BPChq",cod: "0020"},
		{und: "BPGd",cod: "0021"},		{und: "DPS",cod: "0022"},				{und: "APM",cod: "0023"},
		{und: "CFAP",cod: "0024"},		{und: "CPM DENDEZEIROS",cod: "0025"},	{und: "DP",cod: "0028"},
		{und: "BPRv",cod: "0029"},		{und: "19º BPM",cod: "0030"},			{und: "20º BPM",cod: "0032"},
		{und: "4ª CIPM",cod: "0033"},	{und: "6ª CIPM",cod: "0035"},			{und: "DCS",cod: "0037"},
		{und: "COInt",cod: "0038"},		{und: "7ª CIPM",cod: "0046"},			{und: "8ª CIPM",cod: "0047"},
		{und: "20ª CIPM",cod: "0048"},	{und: "21ª CIPM",cod: "0049"},			{und: "24ª CIPM",cod: "0050"},
		{und: "27ª CIPM",cod: "0052"},	{und: "28ª CIPM",cod: "0053"},			{und: "30ª CIPM",cod: "0055"},
		{und: "33 CIPM",cod: "0057"},	{und: "38ª CIPM",cod: "0059"},			{und: "43ª CIPM",cod: "0063"},
		{und: "44ª CIPM",cod: "0064"},	{und: "CORREGEDORIA",cod: "0067"},		{und: "46ª CIPM",cod: "0069"},
		{und: "DMT",cod: "0071"},		{und: "DAL",cod: "0072"},				{und: "CPRSO",cod: "0073"},
		{und: "CPRCH",cod: "0074"},		{und: "55ª CIPM",cod: "0077"},			{und: "DS",cod: "0085"},
		{und: "60ª CIPM",cod: "0087"},	{und: "CPM LOBATO",cod: "0092"},		{und: "CPRL",cod: "0093"},
		{und: "CPRN",cod: "0094"},		{und: "CPRS",cod: "0095"},				{und: "CPRO",cod: "0096"},
		{und: "CPE",cod: "0097"},		{und: "CPRC-B",cod: "0098"},			{und: "CPRC-A",cod: "0099"},
		{und: "CPRMS",cod: "0100"},		{und: "CPRC-C",cod: "0101"},			{und: "COpPM",cod: "0102"}
	];




	vm.getRegister = function() {
		Share.getCadastro()
			.then(function(response){
				vm.processos = response.data;
			});
				
	}
	vm.saveRegister = function(register) {
		Share.saveCadastro(register)
			.then(function(response){
				console.log(response.data);
				delete vm.processo;
			})
		
		vm.getRegister();
	}

	// Form Cadastro

	var objToArray = function(obj){
		var _array = [];
		for (var item in obj){
			_array.push(obj[item]);
		}
		return _array;
	};

	var filterObjAndArray = function(obj){
		return Object.keys(obj).filter(function(key){
			return obj[key];
		});
	};



	vm.alertSuccess = false;
	vm.alertDanger = false
	vm.fixSaveProcess = function(register){
		if(vm.processo){
			 var reg = angular.copy(register);
			 	if (register.hasOwnProperty("servidor")){
			 		if(register.servidor.hasOwnProperty("persons")){
			 			reg.servidor.persons = objToArray(register.servidor.persons);
				 		for (person in reg.servidor.persons){
					 		if(reg.servidor.persons[person].hasOwnProperty("erros")){
					 			reg.servidor.persons[person].erros = filterObjAndArray(reg.servidor.persons[person].erros)
					 		}
					 	}
			 		}
			 	} 	
		
		
				 console.log(reg);
				 console.log("success!");
				 vm.saveRegister(reg);
				 vm.alertSuccess = true;
				 $timeout(function(){vm.alertSuccess = false}, 2000);	
			
		}
		else{
			console.log("lack data!");
			vm.alertDanger = true;
			$timeout(function(){vm.alertDanger = false}, 2000);
		}
	}

	
// rule form for add and remove inputs
	vm.serv = [{}];
	vm.serv.status = true;
	var i = 0;

	vm.addServ = function(index){
		vm.serv.push({index:i++});
		vm.serv.status = false;
	}

	vm.rmServ = function(){
		if (vm.serv.length > 1){
			vm.serv.pop();
		}

		if (vm.serv.length == 1){
			vm.serv.status = true;
		}
	
	}

}]);

