var seedApp = angular.module('seedApp', []);

seedApp.controller('seedController' , ['$scope', function($scope){
  $scope.hello = "HELLO WORLD";
}]);