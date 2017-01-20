/**
 * Created by Carlos on 1/20/2017.
 */

weatherApp.config(function($routeProvider){
    $routeProvider
        .when('/',{
            templateUrl: 'pages/home.htm',
            controller: 'homeController'
        })

        .when('/forecast',{
            templateUrl : 'pages/forecast.htm',
            controller: 'forecastController'
        })
        .when('/forecast/:days',{
            templateUrl : 'pages/forecast.htm',
            controller: 'forecastController'
        })
});
