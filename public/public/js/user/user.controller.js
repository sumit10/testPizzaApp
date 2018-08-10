(function() {
    'use strict';

    angular
        .module('voxweb.user')
        .controller('UserCtrl', UserCtrl);

    UserCtrl.$inject = ['$state', '$http', 'userData', 'notify'];

    function UserCtrl($state, $http, userData, notify) {
        var vm = this;
        vm.search = "";
        vm.searchType = "displayname";
        vm.users = [];

        vm.getUser = function(){
          if (!vm.search) {
            notify({message:'Search field is empty',position:'left',classes:'alert-danger'});
            return;
          }
          var searchPromice;
          if (vm.searchType === "userId") {
            searchPromice = userData.searchByUser(vm.search);
          }else{
            searchPromice = userData.search(vm.search);
          }
          searchPromice
               .then(function(responce){
                 vm.users = responce.data;
               });
        };

        vm.setVerify = function(index,isVerified){
          var current = vm.users[index];
          var msg = (isVerified)?"Are you sure you want to varify selected user":"Are you sure you want to remove varify tag of selected user";
          if (confirm(msg)) {
            userData.setVerifyUser(current.userId,isVerified)
                    .then(function(responce){
                      current.isVerified = isVerified;
                      if (isVerified) {
                        notify({message:'Sucess User '+current.displayname+ " is now Verified User",position:'left',classes:'alert-success'});
                      }else{
                        notify({message:'Sucess User '+current.displayname+ " is not Verified User",position:'left',classes:'alert-danger'});
                      }
                    });
          }
        }
    }
})();
