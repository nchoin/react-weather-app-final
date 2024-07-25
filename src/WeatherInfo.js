import React from "react";
import FormattedDate from "./FormattedDate.js";
import WeatherTemperature from "./WeatherTemperature.js";
import "./Weather.css"

export default function WeatherInfo(props){
    return (
      <div className="WeatherInfo">
        <h1>{props.data.city}</h1>
        <WeatherTemperature fahrenheitTemp={props.data.temperature} />

        <ul className="WeatherInfoUL">
          {/* <li>{props.data.date}</li> */}
          <li>
            <FormattedDate date={props.data.date} />
          </li>
          <li>Humidity: {props.data.humidity}%</li>
          <li>Wind: {props.data.wind}mph</li>
          <li className="text-capitalize">{props.data.conditions}</li>
        </ul>

        <div className="row">
          <div className="col-3">
            <span>
              {" "}
              <img src={props.data.icon} alt={props.data.iconDescription} />
            </span>
          </div>
          {/* <div className="col-6">
            <ul className="WeatherInfoUL">
              <li>Humidity: {props.data.humidity}%</li>
              <li>Wind: {props.data.wind}mph</li>
            </ul>
          </div> */}
        </div>
 
      </div>
    );
}