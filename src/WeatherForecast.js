import React from "react";
import "./WeatherForecast.css"

export default function WeatherForecast (){
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