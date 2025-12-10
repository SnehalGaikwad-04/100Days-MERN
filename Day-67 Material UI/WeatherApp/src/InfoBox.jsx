import * as React from "react";
import "./WeatherApp.css";

export default function InfoBox({ info }) {
  return (
    <div>
      <h2>Weather Information</h2>
      <p>Temperature: {info.temp} °C</p>
      <p>Min Temperature: {info.tempmin} °C</p>
      <p>Max Temperature: {info.tempmax} °C</p>
      <p>Humidity: {info.humidity} %</p>
      <p>Pressure: {info.pressure} hPa</p>
      <p>Feels Like: {info.feelslike} °C</p>
      <p>Weather: {info.weather}</p>
    </div>
  );
}

