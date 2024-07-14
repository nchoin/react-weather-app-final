import React from "react";
import FormattedDate from "./FormattedDate.js";
import WeatherTemperature from "./WeatherTemperature.js";

export default function WeatherInfo(props){
    return (
      <div className="WeatherInfo">
        <h1>{props.data.city}</h1>
        <ul>
          {/* <li>{props.data.date}</li> */}
          <li>
            <FormattedDate date={props.data.date} />
          </li>
          <li className="text-capitalize">{props.data.conditions}</li>
        </ul>
        <div className="row">
          <div className="col-6">
            <span>  <img src={props.data.icon} alt={props.data.iconDescription} /></span>
          

            <WeatherTemperature fahrenheit={props.data.temperature} />
            
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity: {props.data.humidity}%</li>
              <li>Wind: {props.data.wind}mph</li>
            </ul>
          </div>
        </div>
        {/* This is from the WeatherInfo component */}
      </div>
    );
}