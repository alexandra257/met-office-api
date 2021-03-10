const axios = require('axios');
const readlineSync = require('readline-sync');

const key = 'bfd036cf-7ab9-465c-beb5-51080b1be5dd'
const url = 'http://datapoint.metoffice.gov.uk/public/data/val/wxfcs/all/json/sitelist?key=';

// const url = 'http://datapoint.metoffice.gov.uk/public/data/val/wxfcs/all/json/{location}?key=';


const getLocationData = async () => {
  try {
    const response = await axios.get(`${url}${key}`);
    const locationArray = response.data.Locations.Location;
    return locationArray;
  }
  catch (e) {
    console.error(e);
  }
};

//create separate function so we can do location.id to match the one they've entered into the command line

const findUserLocation = async () => {
  const locations = await getLocationData();

  const userLocation = readlineSync.question('Enter your location: ');
  const requestedLocation = locations.filter(location => location.name === userLocation);
  console.log(requestedLocation);


}

findUserLocation();

// getLocationData();
// console.log('Hello world');