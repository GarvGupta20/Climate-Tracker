const defaultQuery={
    lat: 44.34,
    lon: 10.99,
    units : 'metric',
    appid: import.meta.env.VITE_API_KEY,
};


const weatherRequest={
    URL:"http://api.openweathermap.org/data/2.5/weather",
    queries: defaultQuery,
    API_KEY:import.meta.env.VITE_API_KEY,
    location: {
        lat : defaultQuery.lat,
        lon:  defaultQuery.lon,
    },
};

const weatherDetails={
    id : 0,
    description: "mist",
    temperature : 0,
    feels_like : 0,
    humidity : 0,
    wind : 0,
    speed : 0,
    degree : 0,
    country : 0,
    location : 0,

}



/*Promise function for getting the Location*/

function getLocationCoordinates(resolve,reject) {
    navigator.geolocation.getCurrentPosition((location) => resolve(location),(err) => reject(err));
}

/* ------------------------------------------*/



export {weatherRequest,getLocationCoordinates};