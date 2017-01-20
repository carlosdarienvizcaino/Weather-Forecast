
var weatherApp = angular.module('weatherApp',['ngRoute', 'ngResource']);

// Necessary in Angular 1.6 to do routing.
weatherApp.config(['$locationProvider', '$resourceProvider', function($locationProvider,$resourceProvider ) {
    $locationProvider.hashPrefix('');
    $resourceProvider.defaults.stripTrailingSlashes = false;
}]);

