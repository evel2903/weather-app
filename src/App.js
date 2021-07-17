
import './scss/App.scss';
import Search from './components/Search';
import Weather from './components/Weather';
import { useEffect, useState } from 'react';
import WeatherApi from './api/weatherApi';

function App() {
    const [weatherList, setWeatherList] = useState({})
    const [query, setQuery] = useState('')

    useEffect(() => {
        const fetchWeatherList = async () => {
            try {
                const params = {
                    q: query,
                    mode: 'json',
                    appid: process.env.REACT_APP_API_KEY
                }
                const response = await WeatherApi.call5day3hour(params)
                formatWeatherList(response)

            } catch (error) {
                setWeatherList({})
                console.log(error);
            }
        }
        fetchWeatherList()
    }, [query])

    const formatWeatherList = (weatherList) => {
        const format = {
            city_name: `${weatherList.city.name}, ${weatherList.city.country}`,
            list: weatherList.list.slice(0, 6)
        }
        setWeatherList(format)
    }

    const handleSubmit = (query_string) => {
        setQuery(query_string)
    }
    return (
        <div className="container">
            <Search onSubmit={handleSubmit} />
            <Weather weatherList={weatherList} />
        </div>
    );
}

export default App;
