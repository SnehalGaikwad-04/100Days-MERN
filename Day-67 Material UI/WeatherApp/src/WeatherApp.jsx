import * as React from "react";
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";

export default function WeatherApp() {
  const [weatherData, setWeatherData] = React.useState({
    city: "",
    temp: "",
    tempmin: "",
    tempmax: "",
    humidity: "",
    pressure: "",
    feelslike: "",
    weather: "",
  });

  const updateInfo = (newInfo) => {
    setWeatherData(newInfo);
  };

  return (
    <div>
      <h1>The Weather App</h1>
      <SearchBox updateInfo={updateInfo} />
      <InfoBox info={weatherData} />
    </div>
  );
}
