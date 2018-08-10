(function() {
  'use strict';

  var core = angular.module('voxweb.core');

  var config = {
    version: '0.0.1',
  };

  core.constant('config', config);

  core.config(configure);
  core.config(httpIntersaptorConfig);

  configure.$inject = [
    '$stateProvider',
    'routeHelperConfigProvider',
  ];

  httpIntersaptorConfig.$inject = [
    '$httpProvider',
    '$provide'
  ];
  /* @ngInject */
  function configure($stateProvider, routeHelperConfigProvider) {
    configureRouting();

    function configureRouting() {
      var routeCfg = routeHelperConfigProvider;
      routeCfg.config.$stateProvider = $stateProvider;
      routeCfg.config.otherwisePath = '/';
    }
  }

  function httpIntersaptorConfig($httpProvider, $provide) {
    interseptor.$inject = ['$q','$rootScope'];
    function interseptor($q, $rootScope){
      return {
          'request': function (config) {
              // intercept and change config: e.g. change the URL
              // config.url += '?nocache=' + (new Date()).getTime();
              // broadcasting 'httpRequest' event
              $rootScope.$broadcast('httpRequest', config);
              return config || $q.when(config);
          },
          'response': function (response) {
              // we can intercept and change response here...
              // broadcasting 'httpResponse' event
              $rootScope.$broadcast('httpResponse', response);
              return response || $q.when(response);
          },
          'requestError': function (rejection) {
              // broadcasting 'httpRequestError' event
              $rootScope.$broadcast('httpRequestError', rejection);
              return $q.reject(rejection);
          },
          'responseError': function (rejection) {
              // broadcasting 'httpResponseError' event
              $rootScope.$broadcast('httpResponseError', rejection);
              return $q.reject(rejection);
          }
      };
    }
    $provide.factory('httpInterceptor', interseptor);
    $httpProvider.interceptors.push('httpInterceptor');
  }
})();
