(function(){
	'use strict';

	angular
		.module('test.data')
		.service('checkOutData', checkOutData);

	checkOutData.$inject = ['$http','$q'];

	function checkOutData($http, $q){

		this.order = function(order){
			return $http.post('/api/checkout/order',{order:order});
		};

	}

})();
