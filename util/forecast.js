const request = require("request");
const forecast = (latitude, longitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=6356a94b892b52ec7d337500172528cc&query=${latitude},${longitude}`;
  request({
      url: url,
      json: true,
    },
    (error, response) => {
      if (error) {
        callback("Unable to connect to the weather api service", undefined);
      } else if (response.body.error) {
        callback(
          `Error Code: ${response.body.error.code}, ${response.body.error.info}`,
          undefined
        );
      } else {
        callback(undefined, `It is currently ${response.body.current.weather_descriptions[0]} in ${response.body.location.name}, ${response.body.location.region} and ${response.body.current.temperature} degrees; although it feels like ${response.body.current.feelslike} degrees`);
      }
    }
  );
};
module.exports = forecast;