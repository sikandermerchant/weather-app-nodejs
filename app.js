const geoCode = require("./util/geocode.js");
const forecast = require("./util/forecast.js");

console.log(process.argv[2]);
const address = process.argv[2];
if (!address) {
  console.log("Please provide an address!");
} else {
  geoCode(address, (error, geoData) => {
    if (error) {
      return console.log(error);
    }
    forecast(geoData.latitude, geoData.longitude, (error, forecastData) => {
      if (error) {
        return console.log(error);
      }
      console.log(geoData.location);
      console.log(forecastData);
    });
  });
}
