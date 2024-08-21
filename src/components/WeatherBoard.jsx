import React from 'react';
import './WeatherBoard.css'
const WeatherBoard = ({ response }) => {
  if (!response || response.cod !== 200) {
    return <div>Please search for a city to see the weather details.</div>;
  }

  const { main, wind, sys, weather } = response;

  return (
    <div className='weather'>
      <h1>{response.name}, {response.sys.country}</h1>
      <h3> <span>Temperature: </span> {main.temp}°C</h3>
      <h3> <span>Humidity:</span> {main.humidity}%</h3>
      <h3> <span>Weather:</span> {weather[0].description}</h3>
      <h3> <span>Sunset: </span>{new Date(sys.sunset * 1000).toLocaleTimeString()}</h3>
      <h3> <span>Sunrise:</span> {new Date(sys.sunrise * 1000).toLocaleTimeString()}</h3>
      <h3> <span>Wind Speed:</span> {wind.speed} m/s</h3>
    </div>
  );
};

export default WeatherBoard;
