import React from "react";
import './App.css';
import Weather from "./Weather.js"

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1> Weather App</h1>
        <Weather defaultCity="Narragansett"/>
        <footer>
          This project was coded by{" "}
          <a
            href="https://nck-portfolio-creator-developer.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Nicole Choiniere-Kroeker
          </a>{" "}
          and is open-sourced on{" "}
          <a
            href="https://github.com/nchoin/react-weather-app-final"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>{" "}
          and hosted on{" "}
          <a
            href="https://weather-app-react-shecodes-final-nck.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}

