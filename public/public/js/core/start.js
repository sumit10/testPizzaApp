/*
 * The application startup function, called in the app module's run block
 * Created apart from app.js so it can be easily stubbed out
 * during testing or tested independently
 */
(function () {
    'use strict';

    angular
        .module('voxweb.core')
        .factory('appStart', factory);

    factory.$inject = ['$rootScope', '$location', '$q','$state'];

    function factory ($rootScope, $location, $q, $state) {
        //refer "zza-node-mongo/client/app/appStart.js"
        // var logger = common.logger;
        var appStart = {
            start: start
        };

        return appStart;
        //////////////
        function start () {
            // Trigger initial loading of data from server
            // The app may appear to be more responsive if loading happens in background
            // while the app launches on a splash page that doesn't actually need data.
            // dataservice.ready();
            NProgress.configure({ showSpinner: false });
            progressOnHttp();
        }

        // To start progress when there is http request and stop when all http requeest is over
        function progressOnHttp(){
          var numberOfRequest = 0;
          function startProgress(){
            if (numberOfRequest++ === 0) {
              NProgress.start();
            }
          }
          function stopProgress(){
            if (--numberOfRequest === 0) {
              NProgress.done();
            }
          }
          // This event are defined in config.js httpInterceptor factory
          $rootScope.$on('httpRequest',startProgress);
          $rootScope.$on('httpResponse',stopProgress);
          $rootScope.$on('httpRequestError',stopProgress);
          $rootScope.$on('httpResponseError',stopProgress);
        }
    }
})();
