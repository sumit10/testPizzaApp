(function() {
    'use strict';

    angular
        .module('voxweb.comment')
        .controller('CommentCtrl', CommentCtrl);

    CommentCtrl.$inject = ['$state','$http','commentData','notify'];

    function CommentCtrl($state,$http,commentData,notify) {
        var vm = this;
        vm.search = "";
        vm.comments = [];
        vm.getComments = function(){
          commentData.search(vm.search)
               .then(function(responce){
                 console.log(responce);
                 vm.comments = responce.data;
               });
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
