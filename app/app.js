import WeatherAPI from './api/api.js';
import readlineSync from 'readline-sync';

class LocalWeather {
  constructor (weatherAPI) {
    this.weatherAPI = weatherAPI;
  }

  findUserLocation = async () => {
    const locationsList = await this.weatherAPI.getSitelistData();
    const userLocation = readlineSync.question('Enter your location: ');

    const requestedLocation = locationsList.filter(location => location.name === userLocation);
    const requestedLocationID = requestedLocation[0].id;
    console.log(requestedLocation, requestedLocationID)

    const location = await this.weatherAPI.getLocationData(requestedLocation, requestedLocationID);

    console.log(location);
  }
}
const weatherAPI = new WeatherAPI();
const weather = new LocalWeather(weatherAPI);

weather.findUserLocation();

