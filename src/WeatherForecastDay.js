import React from "react";
import "./WeatherForecast.css";

export default function WeatherForecastDay(props){
    function maxTemperature(){
        let temperature = Math.round(props.data.temperature.maximum)
        return `${temperature}°F`
    }
    function minTemperature(){
        let temperature = Math.round(props.data.temperature.minimum)
        return `${temperature}°F`
    }

    function day(){
        let date = new Date(props.data.time * 1000);
        let day = date.getDay();
        let days = ["Sun", "Mon", "Tue, ", "Wed", "Thur", "Fri", "Sat"];
        return days[day];
    }

return (
  <div>
    <div className="WeatherForecastDay">{day()}</div>
    <div className="WeatherForecastIcon">
      <img
        src={props.data.condition.icon_url}
        alt={props.data.condition.icon}
        className="WeatherForecastIcon"
      />
    </div>
    <div className="WeatherForecastTemperatures">
      <span className="WeatherForecastMaxTemp">{maxTemperature()}° |</span>
      <span className="WeatherForecastMinTemp">
        {minTemperature()}°
      </span>
    </div>
  </div>
);
}