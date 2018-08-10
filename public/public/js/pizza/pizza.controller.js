(function() {
    'use strict';

    angular
        .module('test.pizza')
        .controller('PizzaCtrl', PizzaCtrl);

    PizzaCtrl.$inject = ['$state', '$http', 'notify','pizza'];

    function PizzaCtrl($state, $http, notify,pizza) {
        var vm = this;
        this.ingridians = pizza.data.data.ingredients
        this.selectedItem = ingridians.map(i => i);
        
        this.onSelected = function(ingridiansIndex,toppingIndex){
            
        }
    }
})();
