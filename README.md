# Weather-Forecast
This basic angular app was a learning experience from an angular tutorial.

# Install Dependencies
npm install

# Weather Forecast API Key
Got to [Open Weather Map](https://openweathermap.org/api) and Sign-in.
Once you are Signed-in go to the **API keys** tab.

Replace any of the available keys for 'YOUR_API_KEY_GOES_HERE' string in the **app/controllers/forecast.controller.js** file.

```javascript
weatherApp.controller("forecastController", ['$scope', '$resource', '$routeParams', 'cityService',
                                            function($scope,$resource,$routeParams,cityService){

    $scope.city = cityService.city;
    $scope.days = $routeParams.days || 2;
    $scope.appid = 'YOUR_API_KEY_GOES_HERE';
```
# Run App
npm start 

# Use App
Go to your favorite browser. In the address bar paste: **http:localhost:9000**
