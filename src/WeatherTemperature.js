import React, {useState} from "react";

export default function WeatherTemperature(props){
    const [unit, setUnit]=useState('fahrenheit');
function showCelsius(event){
    event.preventDefault();
    setUnit("celsius");
}
function showFahrenheit(event){
    event.preventDefault()
    setUnit("fahrenheit");

}

    if (unit==='fahrenheit'){
    return (
      <div className="WeatherTemperature">
        <span className="Temperature">{Math.round(props.fahrenheitTemp)} </span>
        <span className="unit">
          °F |{" "}
          <a href="/" onClick={showCelsius}>
            °C
          </a>
        </span>
      </div>
    );
} else {
    let celsius = Math.round(((props.fahrenheitTemp - 32) * 5) / 9);
     return (
       <div className="WeatherTemperature">
         <span className="Temperature">{celsius} </span>
         <span className="unit">
           <a href="/" onClick={showFahrenheit}>
             °F
           </a>
           |{" "}
             °C
           
         </span>
       </div>
     );
} 
}