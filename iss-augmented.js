// Augment your ISS application to tell the user how "far" the ISS is from them.

Number.prototype.toRadians = function() {
    return this * Math.PI / 180;
}

var issAddress = "http://api.open-notify.org/iss-now.json";
var request = require('request');

request(issAddress, function(err, result) {
    var resultObject = JSON.parse(result.body);
    var lat1 = resultObject.iss_position.latitude;  
    var lon1 = resultObject.iss_position.longitude;

    var prompt = require('prompt');
    prompt.start();
    prompt.get(['What city do you live in?'], function(err, result) {
        var myCity = result["What city do you live in?"];

        var myAddress = "https://maps.googleapis.com/maps/api/geocode/json?address=" + myCity;

        request(myAddress, function(err, result) {
            var myResultObject = JSON.parse(result.body);
            
            var cityName = myResultObject.results[0].formatted_address;
            
            var lat2 = myResultObject.results[0].geometry.location.lat;
            var lon2 = myResultObject.results[0].geometry.location.lng;

            var R = 6371000; // metres
            var φ1 = lat1.toRadians();
            var φ2 = lat2.toRadians();
            var Δφ = (lat2 - lat1).toRadians();
            var Δλ = (lon2 - lon1).toRadians();

            var a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
                Math.cos(φ1) * Math.cos(φ2) *
                Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
            var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

            var d = ((R * c) / 1000).toFixed(1);

            console.log("The distance between " + cityName + " and the ISS is " + d + " kilometers.");

        })

    })

});
