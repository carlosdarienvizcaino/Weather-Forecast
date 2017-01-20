/**
 * Created by Carlos on 1/20/2017.
 */

weatherApp.controller("forecastController", ['$scope', '$resource', '$routeParams', 'cityService',
                                            function($scope,$resource,$routeParams,cityService){

    $scope.city = cityService.city;
    $scope.days = $routeParams.days || 2;
    $scope.appid = 'YOUR_API_KEY_GOES_HERE';

    $scope.weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily");
    $scope.weatherResult = $scope.weatherAPI.get({
         q : $scope.city,
         cnt : $scope.days,
         APPID : $scope.appid
    });

    $scope.getTemperatureInFahrenheit = function (kelvinTemp){
        return parseInt((9/5)*(kelvinTemp-273) + 32);
    }

    $scope.convertToDate = function(date){
       return new Date(date * 1000);
    }
}]);
