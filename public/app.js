var app = angular.module("pregaoApp", ["ngRoute", "ui.utils.masks"])

app.config(function($routeProvider, $locationProvider){
		// $locationProvider.html5Mode(true);
		$routeProvider
			.when("/cadastro", {
				templateUrl: "app/views/cadastro.html",
				controller: "cadastroCtrl",
				controllerAs: "Cadastro",
			})
			.when("/login", {
				templateUrl: "app/views/login.html"
			})
			.when("/query", {
				templateUrl: "app/views/query.html",
				controller: "queryCtrl",
				controllerAs: "Query"
			})
			.otherwise({ 
				redirectTo: '/login' 
			});


	});









		
	