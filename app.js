const geoCode = require("./utils/geocode.js");
const forecast = require("./utils/forecast.js");

console.log(process.argv[2]);
const address = process.argv[2];
if (!address) {
  console.log("Please provide an address!");
} else {
  geoCode(address, (error, {
    latitude,
    longitude,
    location
  } = {}) => { ///we have assigned a default value to the second parameter that is passed to geocode. The default here is empty object in case there is an error. If not provided it will throw a syntax error as an undefined object cannot be destructured
    if (error) {
      return console.log(error);
    }
    forecast(latitude, longitude, (error, forecastData) => {
      if (error) {
        return console.log(error);
      }
      console.log(location);
      console.log(forecastData);
    });
  });
}