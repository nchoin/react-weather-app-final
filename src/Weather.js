import React , {useState} from "react";
import axios from "axios";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo.js"
import WeatherForecast from "./WeatherForecast.js"


export default function Weather(props){
    // const [ready, setReady] = useState(false);
    const [city, setCity]=useState(props.defaultCity);

    const [weatherData, setWeatherData]=useState({ready:false});

    function handleResponse(response){
        console.log(response.data)
        console.log(response.data.coordinates)
        setWeatherData({
          ready: true,
          city: response.data.city,
          coordinates: response.data.coordinates,
          // temperature: (response.data.temperature.current * 9) / 5 + 32,
          temperature: response.data.temperature.current,
          date: new Date(response.data.time * 1000),
          humidity: response.data.temperature.humidity,
          wind: Math.round(response.data.wind.speed),
          conditions: response.data.condition.description,
          icon: response.data.condition.icon_url,
          iconDescription: response.data.condition.icon,
        });
    }

    function search(){
        const apiKey = "6bccfefa354f0f4do4245dc0a56fata0";
        const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial`;
        axios.get(apiUrl).then(handleResponse);
    }

    function handleSubmit(event){
        event.preventDefault();
        search();
        // alert(city);
        // Search for the city
    }
    function handleCityChange(event){
        setCity(event.target.value);
        
    }
    if (weatherData.ready) {
        return (
          <div className="Weather">
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-9">
                  <input
                    type="search"
                    placeholder="Enter a city"
                    className="form-control"
                    onChange = {handleCityChange}
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
            <WeatherInfo data={weatherData}/>
            <WeatherForecast coordinates={weatherData.coordinates}/>
            </div>
        );
    } else {
    search();
    return "loading...Please wait..."
    }

    
}
