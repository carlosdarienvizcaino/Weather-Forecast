
weatherApp.controller("homeController", ['$scope', 'cityService', function($scope, cityService){
    $scope.city = cityService.city;

    // Update city in service when city changes value
    $scope.$watch('city', function(){
        cityService.city = $scope.city;
    });
}]);

