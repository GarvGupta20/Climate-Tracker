const locationQuery={
    lat: 44.34,
    lon: 10.99,
    appid: import.meta.env.VITE_API_KEY,
};

const cityQuery={
    city : city,
    appid : import.meta.env.VITE_API_KEY,
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


navigator.geolocation.getCurrentPosition((location) => {
   // console.log(location);
    defaultQuery.lat=location.coords.latitude;
    defaultQuery.lon=location.coords.longitude;
},(err) => {
    console.log('Cannot get the location for the device or You have not Granted the position for the same');
})


export {weatherRequest,getLanAndLat};