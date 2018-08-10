/* jshint -W117, -W030 */
describe('UserController', function() {
    var controller;
    var users = mockData.getMockUsers();

    beforeEach(function() {
        bard.appModule('voxweb.user');
        bard.inject('$controller', '$q', '$rootScope', 'userData');
    });

    beforeEach(function () {
        controller = $controller('UserCtrl');
    });

    bard.verifyNoOutstandingHttpRequests();

    describe('User controller', function() {
        it('should be hello world', function () {
            expect("hello").to.be.defined;
        });

    });
});
