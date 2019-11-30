const geocode = require('./utils/geocode.js')
const forecast = require('./utils/forecast.js')
const request = require('request');

const userLocation = process.argv[2];

if(!userLocation) {
  return console.log('Provide location!');
};

geocode(userLocation, (error, data) => {
  if (error) {
    return console.log(error);
  }
  const { longitude, latitude, location } = data;

  forecast({ longitude, latitude }, (err, data) => {
    if (error) {
      return console.log(error);
    }
    const { summary, temperature, precipProbability } = data;
    console.log('Location: ', location);
    console.log(summary);
    console.log(`Temperature: ${temperature}`);
    console.log(`Chance to rain: ${precipProbability}%`);
  })
});

