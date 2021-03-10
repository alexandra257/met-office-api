import axios from 'axios';

export default class WeatherAPI {
  constructor() {
    this.key = 'bfd036cf-7ab9-465c-beb5-51080b1be5dd';
}

getSitelistData = async () => {
  try {
    const weatherUrl = `http://datapoint.metoffice.gov.uk/public/data/val/wxfcs/all/json/sitelist?key=${this.key}`;
    const response = await axios.get(weatherUrl);
    const locationArray = response.data.Locations.Location;
    return locationArray;
  }
  catch (e) {
    console.error(e);
  }
};

getLocationData = async (location) => {
  try {
    const weatherUrl = `http://datapoint.metoffice.gov.uk/public/data/val/wxfcs/all/json/${location}?res=3hourly&key=${this.key}`;
    const response = await axios.get(weatherUrl);
    const locationData = response.data;
    console.log(locationData.SiteRep.DV.Location.name);
  }
  catch (e) {
    console.error(e);
  }
};

}

