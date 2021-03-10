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

getLocationData = async (location, locationID) => {
  try {
    const weatherUrl = `http://datapoint.metoffice.gov.uk/public/data/val/wxfcs/all/json/${locationID}?res=3hourly&key=${this.key}`;
    const response = await axios.get(weatherUrl);
    const locationData = response.data;
    const precipitation = locationData.SiteRep.DV.Location.Period[0].Rep[0].Pp;
    console.log('The current chance of rainfall in ', location[0].name, 'is ', precipitation, '%');
  }
  catch (e) {
    console.error(e);
  }
};

}

