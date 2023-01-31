import React from "react";
import { useState } from "react";

function DashBoard() {
    const [firstName, setFirstName] = useState(''); // Declared a state variable

    function handleChange(ev)
    {
       setFirstName(ev.target.value);
    }

    function handleSubmit(ev)
    {
        ev.preventDefault();
        console.log(import.meta.env);
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=${import.meta.env.VITE_API_KEY}`)
        .then(res => res.json()).then(console.log)
        
    }



    return (
        <form onSubmit={handleSubmit}>
         <label htmlFor="city-field">
         Search
          <input name="city-field" value={firstName} onChange={handleChange} 
          className="border-2 border-black"/>
         </label> 
         <input type="submit" value="submit"/>
        </form>
    );
  }

export default DashBoard;