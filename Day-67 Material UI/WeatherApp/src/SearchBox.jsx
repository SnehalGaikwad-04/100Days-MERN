import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Autocomplete from "@mui/material/Autocomplete";
import * as React from "react";
import "./WeatherApp.css";

export default function SearchBox({ updateInfo }) {
  let [city, setCity] = React.useState("");

  const API_URl = "http://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "5671a923f249cf67f186515feac0a0ee";

  let getWeather = async (city) => {
    let response = await fetch(
      `${API_URl}?q=${city}&limit=5&appid=${API_KEY}&units=metric`
    );

    // Handle network or bad response (e.g., 404 city not found)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
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
    setCity(e.target.value);
  };

  let handleSubmit = async (e) => {
    e.preventDefault();
    setCity("");
    try {
      let response = await getWeather(city);
      updateInfo(response);
      setCity("");
    } catch (err) {
      console.error("Failed to fetch weather data:", err);
    }
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
        />
        <br />
        <br />
        <Button
          id="search-btn"
          variant="contained"
          style={{ marginLeft: "4rem" }}
          type="submit"
        >
          Search
        </Button>
      </form>
    </div>
  );
}

