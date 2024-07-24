import React, {useState} from "react";
import "./WeatherForecast.css"
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";


export default function WeatherForecast (props){
    let [loaded, setLoaded]=useState(false);
    let [forecastData, setForecastData]=useState(null);

    function handleResponse(response){
        console.log(response.data)
        setForecastData(response.data.daily);
        setLoaded(true);
    }

    

    if (loaded){
       return (
         <div className="WeatherForecast">
           <div className="row">
            {forecastData.map(function (dailyForecast, index){
                if (index<5){
                    return (
                <div className="col" key={index}>
              <WeatherForecastDay data={dailyForecast}/>
              </div>
            );
        }
        })}  
           </div>
         </div>
       );
    }else {
         let apiKey = "6bccfefa354f0f4do4245dc0a56fata0";
         let longitude = props.coordinates.longitude;
         let latitude = props.coordinates.latitude;

         let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=imperial`;

         axios.get(apiUrl).then(handleResponse);
         return null;
    }

    
}