const request = require("request");
const geoCode = require('./util/geocode.js');
// const weatherurl =
//   "http://api.weatherstack.com/current?access_key=6356a94b892b52ec7d337500172528cc&query=london";
// //npm reference - https://www.npmjs.com/package/request
// request({ url: weatherurl, json: true }, (error, response) => {
//   if (error) {
//     console.log(`Unable to connect to the service`);
//   } else if (response.body.error) {
//     console.log(
//       `Error Code: ${response.body.error.code}, ${response.body.error.info}`
//     );
//   } else {
//     // ref - https://www.npmjs.com/package/request#requestoptions-callback
//     // console.log(response.body.current);
//     const weather_descriptions = response.body.current.weather_descriptions[0];
//     const current_temperature = response.body.current.temperature;
//     const current_feelsLike = response.body.current.feelslike;
//     console.log(
//       `It is currently ${weather_descriptions} and ${current_temperature} degrees in London; although it feels like ${current_feelsLike} degrees`
//     );
//   }
// });
// const geourl =
//   "https://api.mapbox.com/geocoding/v5/mapbox.places/london.json?access_token=pk.eyJ1Ijoic2lrYW5kZXJtZXJjaGFudCIsImEiOiJja2NrbG1mNWUwN3NhMnlyejNtaTNtc3ZjIn0.wAmH5bGtJtEDmt0uSDsErg&limit=1";
// request({ url: geourl, json: true }, (error, response) => {
//   if (error) {
//     console.log(
//       "Cannot connect to service, please check the network and try again!"
//     );
//   } else if (response.body.features.length === 0) {
//     console.log("Please enter a valid location");
//   } else {
//     console.log(response.body.features[0].center);
//     const longitude = response.body.features[0].center[0];
//     const latitude = response.body.features[0].center[1];
//     console.log(
//       `The Longitude and Latitude for London are ${longitude} and ${latitude} respectively`
//     );
//   }
// });

geoCode('Boston', (error, data) => {
  console.log('Error is', error);
  console.log('Data is', data);
});