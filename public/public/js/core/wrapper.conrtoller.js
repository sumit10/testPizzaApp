(function() {
    'use strict';

    angular
        .module('voxweb.core')
        .controller('wrapperController', wrapperController);

    wrapperController.$inject = ['$scope'];

    function wrapperController($scope) {
        var vm = this;
        vm.menuOpen = true;
    }
})();
