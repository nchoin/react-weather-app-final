import React , {useState} from "react";
import axios from "axios";
import "./Weather.css";
import FormattedDate from "./FormattedDate.js"

export default function Weather(props){
    // const [ready, setReady] = useState(false);
    const [weatherData, setWeatherData]=useState({ready:false});
// handleResponse function will use the date from the api call and display it however I decide.
    function handleResponse(response){
        console.log(response.data)
        setWeatherData({
          ready:true,
          city: response.data.city,
          temperature: Math.round(response.data.temperature.current),
          date: new Date(response.data.time*1000),
          humidity: response.data.temperature.humidity,
          wind: Math.round(response.data.wind.speed),
          conditions: response.data.condition.description,
          icon: response.data.condition.icon_url,
          iconDescription:response.data.condition.icon,
        });
        
    }

    if (weatherData.ready) {
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
                  <input
                    type="submit"
                    value="Search"
                    className="btn btn-primary"
                  />
                </div>
              </div>
            </form>
            <h1>{weatherData.city}</h1>
            <ul>
              {/* <li>{weatherData.date}</li> */}
              <li>
                <FormattedDate date={weatherData.date}/>
              </li>
              <li className="text-capitalize">{weatherData.conditions}</li>
            </ul>
            <div className="row">
              <div className="col-6">
                <img src={weatherData.icon} alt={weatherData.iconDescription} />
                {weatherData.temperature}°F
              </div>
              <div className="col-6">
                <ul>
                  <li>Humidity: {weatherData.humidity}%</li>
                  <li>Wind: {weatherData.wind}mph</li>
                </ul>
              </div>
            </div>
            This is from the Weather component
          </div>
        );
    } else {
            const apiKey = "6bccfefa354f0f4do4245dc0a56fata0";
    const apiUrl =
      `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse)
    return "loading...Please wait..."
    }

    
}
