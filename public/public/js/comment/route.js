(function() {
  'use strict';
  angular
    .module('voxweb.comment')
    .run(appRun);

  /* @ngInject */
  appRun.$inject = ['routerHelper'];

  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [
      {
      state: 'comment',
      config: {
        url: '/comment',
        templateUrl:'/js/comment/comment.html',
        controller: 'CommentCtrl',
        controllerAs: 'vm'
      }
    }];
  }
})();
