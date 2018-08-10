(function(){
	'use strict';

	angular
		.module('test.data')
		.service('cartData', cartData);

	cartData.$inject = ['$http','$q'];

	function cartData($http, $q){
        var cart = null;
		this.addToCart = function(cartData){
			cart = cartData;
		};

        this.getCart = function(){
            return cart;
        }
	}

})();
