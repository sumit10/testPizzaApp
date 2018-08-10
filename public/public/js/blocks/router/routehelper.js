(function(){
  'use strict';
  angular
    .module('blocks.router')
    .provider('routeHelperConfig', routeHelperConfig)
    .provider('routerHelper', routerHelperProvider);


    // Must configure via the routehelperConfigProvider
  function routeHelperConfig() {
      /* jshint validthis:true */
      this.config = {
          // These are the properties we need to set
          // $stateProvider: undefined
          // docTitle: ''
          // resolveAlways: {ready: function(){ } }
      };

      this.$get = function() {
          return {
              config: this.config
          };
      };
  }

  routerHelperProvider.$inject = [
    '$locationProvider', '$stateProvider',
    '$urlRouterProvider','routeHelperConfigProvider'
  ];

  /* @ngInject */
  function routerHelperProvider(
      $locationProvider,
      $stateProvider,
      $urlRouterProvider,
      routeHelperConfigProvider) {

      /* jshint validthis:true */
      this.$get = RouterHelper;

      $locationProvider.html5Mode({
        enabled:false,
        requireBase: false
      });

      $locationProvider.hashPrefix('!');

      RouterHelper.$inject = ['$state'];
      /* @ngInject */
      function RouterHelper($state) {
          var hasOtherwise = false;
          var service = {
              configureStates: configureStates,
              getStates: getStates
          };

          return service;

          ///////////////

          function configureStates(states, otherwisePath) {
              otherwisePath = otherwisePath || routeHelperConfigProvider.config.otherwisePath;
              states.forEach(function(state) {
                state.config.resolve =
                  angular.extend(state.config.resolve || {}, routeHelperConfigProvider.config.resolveAlways);
                  // For superParent uncomment this code.
                  // if (state.state !== 'root') {
                  //   state.state = 'root.'+state.state;
                  // }
                  $stateProvider.state(state.state, state.config);
              });
              if (otherwisePath && !hasOtherwise) {
                  hasOtherwise = true;
                  $urlRouterProvider.otherwise(otherwisePath);
              }
          }

          function getStates() { return $state.get(); }
      }
  }

})();
