import { React,useState } from "react";
import Input from "../Input";
import { weatherRequest,getLocationCoordinates} from './WeatherConfig';
import makeApiCall from '../../utils/apiCall.js';

async function handleSubmit(val)
{
    if(val=='location')
    {
      await new Promise(getLocationCoordinates).then((data) => {
          console.log(data);
          weatherRequest.queries={
            lat : data.coords.latitude, 
            lon : data.coords.longitude,
            appid : import.meta.env.VITE_API_KEY,
         };
          
       }); 
    } 
    else 
    {
       weatherRequest.queries={
          q : val,
          appid : import.meta.env.VITE_API_KEY,
       };   
    }

    const latest_data=makeApiCall(weatherRequest);
}

function DashBoard() {
    const [weatherInfo,setWeatherInfo]=useState(''); //Declared a state variable

    const london_data=makeApiCall(weatherRequest);

    return (
    <>
      <Input name='city-field' submit={handleSubmit} data='Search'/>
      <button onClick={() => setWeatherInfo('a')}>Click</button>
    </>
    );
}

export default DashBoard;