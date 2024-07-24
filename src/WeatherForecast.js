import React from "react";
import "./WeatherForecast.css"
import axios from "axios";


export default function WeatherForecast (props){
    function handleResponse(response){
        console.log(response.data)
    }
    console.log(props);
    let apiKey="6bccfefa354f0f4do4245dc0a56fata0";
    let longitude = props.coordinates.longitude;
    let latitude = props.coordinates.latitude ;

    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}`;

    axios.get(apiUrl).then(handleResponse);

    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
            <div className="WeatherForecastDay">Thu</div>
            <div className="WeatherForecastIcon">🌨️</div> 
            <div className="WeatherForecastTemperatures">
                <span className="WeatherForecastMaxTemp">19°|</span>
                <span className="WeatherForecastMinTemp">10°</span>
                </div> 
          </div>
        </div>
      </div>
    );
}