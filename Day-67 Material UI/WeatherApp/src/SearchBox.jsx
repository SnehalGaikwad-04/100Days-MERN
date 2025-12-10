import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import * as React from "react";
import "./WeatherApp.css";

export default function SearchBox({ updateInfo }) {
  let [city, setCity] = React.useState("");
  let [error, setError] = React.useState(false);

  const API_URl = "http://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "5671a923f249cf67f186515feac0a0ee";

  const initialWeatherData = {
    city: "",
    temp: "",
    tempmin: "",
    tempmax: "",
    humidity: "",
    pressure: "",
    feelslike: "",
    weather: "",
  };

  let getWeather = async (city) => {
    setError(false);

    let response = await fetch(
      `${API_URl}?q=${city}&limit=5&appid=${API_KEY}&units=metric`
    );

    if (!response.ok) {
      throw new Error("City not found");
    }

    let data = await response.json();
    let result = {
      city: data.name,
      temp: data.main.temp,
      tempmin: data.main.temp_min,
      tempmax: data.main.temp_max,
      humidity: data.main.humidity,
      pressure: data.main.pressure,
      feelslike: data.main.feels_like,
      weather: data.weather[0].main,
    };
    console.log("Result:", result);

    return result;
  };

  let handlechange = (e) => {
    // Clear error message when the user starts typing again
    setError(false);
    setCity(e.target.value);
  };

  let handleSubmit = async (e) => {
    e.preventDefault();

    if (!city.trim()) {
      setError(true);
      return;
    }

    try {
      let response = await getWeather(city);
      updateInfo(response);
    } catch (err) {
      setError(true);
      updateInfo(initialWeatherData);
      console.error("Failed to fetch weather data:", err.message);
    }
    setCity("");
  };

  return (
    <div className="searchbox">
      <form action="" onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="Search for a city"
          variant="outlined"
          value={city}
          onChange={handlechange}
          error={error}
          helperText={error ? "No such city found. Please try again." : ""}
        />
        <br />
        <br />
        <Button id="search-btn" variant="contained" type="submit">
          Search
        </Button>
      </form>
    </div>
  );
}
