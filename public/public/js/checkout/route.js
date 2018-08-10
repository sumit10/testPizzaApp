(function() {
    'use strict';
    angular
      .module('test.checkout')
      .run(appRun);
  
    /* @ngInject */
    appRun.$inject = ['routerHelper'];
  
    function appRun(routerHelper) {
      routerHelper.configureStates(getStates());
    }
  
    function getStates() {
      return [
        {
        state: 'checkout',
        config: {
          url: '/checkout',
          templateUrl:'/js/checkout/checkout.html',
          controller: 'CheckoutCtrl',
          controllerAs: 'vm'
        }
      }];
    }
  })();
  