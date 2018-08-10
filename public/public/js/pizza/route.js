(function() {
    'use strict';
    angular
      .module('test.pizza')
      .run(appRun);
  
    /* @ngInject */
    appRun.$inject = ['routerHelper'];
    getPizza.$inject = ['pizzaData'];
  
    function appRun(routerHelper) {
      routerHelper.configureStates(getStates());
    }
  
    function getPizza(pizzaData) {
        console.log(pizzaData);
      return pizzaData.get();
    }
  
    function getStates() {
      return [
        {
        state: 'pizza',
        config: {
          url: '/pizza',
          templateUrl:'/js/pizza/pizza.html',
          controller: 'PizzaCtrl',
          controllerAs: 'vm',
          resolve:{
              pizza:getPizza
          }
        }
      }];
    }
  })();
  