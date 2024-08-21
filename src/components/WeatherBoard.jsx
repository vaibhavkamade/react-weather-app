import React from 'react';
import './WeatherBoard.css'
const WeatherBoard = ({ response }) => {
  if (!response || response.cod !== 200) {
    return <div>Please search for a city to see the weather details.</div>;
  }

  const { main, wind, sys, weather } = response;

  return (
    <div className='weather'>
      <h3>{response.name}, {response.sys.country}</h3>
      <h5> <span>Temperature: </span> {main.temp}°C</h5>
      <h5> <span>Humidity:</span> {main.humidity}%</h5>
      <h5> <span>Weather:</span> {weather[0].description}</h5>
      <h5> <span>Sunset: </span>{new Date(sys.sunset * 1000).toLocaleTimeString()}</h5>
      <h5> <span>Sunrise:</span> {new Date(sys.sunrise * 1000).toLocaleTimeString()}</h5>
      <h5> <span>Wind Speed:</span> {wind.speed} m/s</h5>
    </div>
  );
};

export default WeatherBoard;
