const defaultQuery={
    lat: 44.34,
    lon: 10.99,
    appid: import.meta.env.VITE_API_KEY,
};


const weatherRequest={
    URL:"http://api.openweathermap.org/data/2.5/weather",
    queries: defaultQuery,
    API_KEY:import.meta.env.VITE_API_KEY,
    location: {
        lat : defaultQuery.latitude,
        lon:  defaultQuery.longitude,
    },
};



/*Promise function for getting the Location*/

function getLocationCoordinates(resolve,reject) {
    navigator.geolocation.getCurrentPosition((location) => resolve(location),(err) => reject(err));
}

/* ------------------------------------------*/



export {weatherRequest,getLocationCoordinates};