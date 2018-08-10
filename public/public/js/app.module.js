(function() {
    'use strict';

    angular
      .module('voxwebAdmin', [
        /* Order of dependencies is not important,
         * Angular handles it as and when required.
         */

         //Angular Module

         //Custom Modules
        'voxweb.core',
        // 'voxweb.data',
        // 'voxweb.comment',
        // 'voxweb.user',
        // 'voxweb.post',
        // 'voxweb.poc',
        'test.data',
        'test.pizza',
        //Feature Modules


        //3rd Party Modules
        'cgNotify'
      ]);

})();
