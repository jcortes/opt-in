angular.module('optApp', [])

.run(function($rootScope){
    $rootScope.alert = function(data){alert(data)};
})

.directive('optIn', function(){
    return {
        templateUrl: 'login-template1.html',
        restrict: 'E',
        transclude: true
    };
})

.directive('myClick', function(){
    return {
        link: function($scope, element, attrs){
            element.on('click', function(){
                $scope.$apply(function(){
                    $scope.$eval(attrs.myClick);
                });
            });
        }
    };
})