import { React,useState } from "react";
import Input from "../Input";
import { weatherRequest,getLanAndLat } from './WeatherConfig';
import makeApiCall from '../../utils/apiCall.js';

function handleSubmit(val)
{

    makeApiCall(weatherRequest,(res) => {
        console.log(res);
    });
}

function DashBoard() {
    const [weatherInfo,setWeatherInfo]=useState([]); //Declared a state variable

    return (
    <>
      <Input name='city-field' submit={handleSubmit} data='Search'/>
      <p></p>
    </>
    );
}

export default DashBoard;