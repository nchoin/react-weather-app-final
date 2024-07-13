import React from "react";
import axios from "axios";
import "./Weather.css";
export default function Weather(){
    const apiKey = "6bccfefa354f0f4do4245dc0a56fata0";
    let city = "New York"
    const apiUrl =
      `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city"
                className="form-control"
              />
            </div>
            <div className="col-3">
                 <input type="submit" value="Search" className="btn btn-primary" />
            </div>
           
          </div>
        </form>
        <h1>New York</h1>
        <ul>
          <li>Friday 07:58</li>
          <li>Mostly Cloudy</li>
        </ul>
        <div className="row">
          <div className="col-6">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              alt="partly cloudy"
            />
            82°F
          </div>
          <div className="col-6">
            <ul>
              <li>Precipitation 15%</li>
              <li>Humidity 76%</li>
              <li>Wind 9mph</li>
            </ul>
          </div>
        </div>
        This is from the Weather component
      </div>
    );
}
