import { React,useReducer} from "react";
import Input from "../Input";
import { weatherRequest,getLocationCoordinates} from './WeatherConfig';
import makeApiCall from '../../utils/apiCall.js';








function reducer(state,action)
{ 
      if(action.type==='location')
      {
         return action.data;
      }

      if(action.type==='click')
      {
         return action.data;
      }

      else throw new Error('There is no action dfined liked this');
}

function DashBoard() {


    const [weatherInfo,dispatch]=useReducer(reducer,{
      weather : [{
         id : 1,
      }],
    }); //Declared a state variable

   // const london_data=makeApiCall(weatherRequest);

   async function handleSubmit(val)
{
    if(val=='location')
    {
      await new Promise(getLocationCoordinates).then((data) => {
          console.log(data);
          weatherRequest.queries={
            lat : data.coords.latitude, 
            lon : data.coords.longitude,
            units : 'metric',
            appid : import.meta.env.VITE_API_KEY,
         };
          
       }); 
    } 
    else 
    {
       weatherRequest.queries={
          q : val,
          units : 'metric',
          appid : import.meta.env.VITE_API_KEY,
       };   
    }

    const latest_data=await makeApiCall(weatherRequest);
    dispatch({type : "click",data : latest_data});
}

    console.log(weatherInfo);

    return (
    <>
      <Input name='city-field' submit={handleSubmit} data='Search'/>
      <p>


           {weatherInfo.weather[0].id}

      </p>
    </>
    );
}

export default DashBoard;