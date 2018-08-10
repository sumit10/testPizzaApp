(function(){
	'use strict';

	angular
		.module('test.data')
		.service('pizzaData', pizzaData);

	pizzaData.$inject = ['$http','$q'];

	function pizzaData($http, $q){

		this.get = function(){
			console.log("yo");
			return $http.get('/api/pizza/');
		};

	}

})();
