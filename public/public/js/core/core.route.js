(function() {
  'use strict';
  angular
    .module('voxweb.core')
    .run(appRun);

  /* @ngInject */
  appRun.$inject = ['routerHelper'];
  // getOptions.$inject = ['$q','optionsDataService'];

  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [
    ];
  }

})();
