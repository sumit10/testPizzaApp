(function(){
	'use strict';

	angular
		.module('test.data')
		.service('dicountData', dicountData);

	dicountData.$inject = ['$http','$q'];

	function dicountData($http, $q){

		this.get = function(code){
			return $http.post('/api/discount/check',{
                code:code
            });
		};

	}

})();
