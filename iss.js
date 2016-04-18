// write a simple node program that will 
// output the latitude and longitude of the International Space Station.

var address = "http://api.open-notify.org/iss-now.json";

var request = require('request');

var add = request(address);

request(address, function(err, result) {
    var resultObject = JSON.parse(result.body);
    console.log("The latitude of the ISS is " + resultObject.iss_position.latitude.toFixed(2));
    console.log("The longitude of the ISS is " + resultObject.iss_position.longitude.toFixed(2));
})
