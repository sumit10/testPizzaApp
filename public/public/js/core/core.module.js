(function() {
    'use strict';

    angular
      .module('voxweb.core', [
        'blocks.router',
         'ui.router',
         'ui.bootstrap'
      ]);

    angular
      .module('voxweb.core')
      .run(['appStart', function (appStart) {
          appStart.start();
      }]);

})();
