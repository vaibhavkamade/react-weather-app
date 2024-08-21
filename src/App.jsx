import { useEffect, useState } from 'react';
import WeatherBoard from './components/WeatherBoard';
import './App.css';

function App() {
  const [city, setCity] = useState('mumbai');
  const [response, setResponse] = useState(null);

  const getWeather = async (city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e64b53c6d03482378f64d941dab4985a&units=metric`;

    try {
      const response = await fetch(url);
      const result = await response.json();
      console.log(result);
      return result;
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const weatherData = await getWeather(city);
    setResponse(weatherData);
  };

  const handleChange = (e) => {
    setCity(e.target.value);
  };

  useEffect(() => {
    const fetchDefaultWeather = async () => {
      const weatherData = await getWeather('mumbai');
      setResponse(weatherData);
    };
    fetchDefaultWeather();
  }, []);

  return (
    <>
      <div className='app'>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter the name of city"
            value={city}
            onChange={handleChange}
          />
          <button type="submit">Search</button>
        </form>
        <WeatherBoard response={response} />
      </div>
    </>
  );
}

export default App;
