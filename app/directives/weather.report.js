/**
 * Created by Carlos on 1/20/2017.
 */

weatherApp.directive("weatherReport", function(){
   return {
       restrict : 'E',
       templateUrl : 'directives/weather.report.html',
       replace: true,
       scope: {
            weatherDay : "=",
            convertToStandard: "&",
            convertToDate: "&",
            dateFormat: "@"
       }
   }
});

