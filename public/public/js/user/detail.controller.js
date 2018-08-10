(function() {
    'use strict';

    angular
        .module('voxweb.user')
        .controller('UserDetailCtrl', UserDetailCtrl);

    UserDetailCtrl.$inject = ['$state','$http','posts','comments','notify', 'postData', 'commentData', '$stateParams'];

    function UserDetailCtrl($state, $http, posts, comments, notify, postData, commentData, $stateParams) {
        var vm = this;
        vm.posts = posts.data;
        vm.comments = comments.data;

        function refresh(){
          postData.searchByUser($stateParams.userId)
                  .then(function(posts){
                    vm.posts = posts.data;
                  });

         commentData.searchByUser($stateParams.userId)
                   .then(function(comments){
                     vm.comments = comments.data;
                   });
        }

        vm.removePost = function(index){
          var current = vm.posts[index];
          if (confirm("Are you sure you want to delete selected post")) {
            postData
                .delete(current.postId)
                .then(function(data){
                  notify({message:'Sucess in deleting user Post and its comments',position:'left',classes:'alert-success'});
                  refresh();
                });
          }
        };

        vm.removeComments = function(index){
          var current = vm.comments[index];
          if (confirm("Are you sure you want to delete selected comment")) {
            commentData
                .delete(current.commentId)
                .then(function(data){
                  notify({message:'Sucess in deleting user comment',position:'left',classes:'alert-success'});
                  vm.comments.splice(index,1);
                });
          }
        };
    }
})();
