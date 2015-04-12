angular.module('optApp', [])

.directive('optIn', function(){
    return {
        templateUrl: 'login-template1.html',
        restrict: 'E',
        transclude: true
    };
});