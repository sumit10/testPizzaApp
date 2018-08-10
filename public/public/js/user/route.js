(function() {
  'use strict';
  angular
    .module('voxweb.user')
    .run(appRun);

  /* @ngInject */
  appRun.$inject = ['routerHelper'];
  getPosts.$inject = ['$stateParams','postData'];
  getComments.$inject = ['$stateParams','commentData'];

  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getPosts($stateParams,postData) {
    return postData.searchByUser($stateParams.userId);
  }

  function getComments($stateParams,commentData) {
    return commentData.searchByUser($stateParams.userId);
  }

  function getStates() {
    return [
      {
      state: 'user',
      config: {
        url: '/user',
        templateUrl:'/js/user/user.html',
        controller: 'UserCtrl',
        controllerAs: 'vm'
      }
    },{
    state: 'userDetail',
    config: {
      url: '/user/:userId',
      templateUrl:'/js/user/detail.html',
      controller: 'UserDetailCtrl',
      controllerAs: 'vm',
      resolve:{
        posts:getPosts,
        comments:getComments
      }
    }
  }];
  }
})();
