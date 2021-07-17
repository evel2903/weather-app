import React from 'react'
import PropTypes from 'prop-types'
import '../../scss/weather.scss'

const Weather = props => {
    const { weatherList } = props
    const { city_name, list } = weatherList
    return (
        <div className="weather__content">
            {
                list === undefined ? "" : list.map(weather => (
                    <div key={weather.dt} className="weather__item">
                        <div className="date">
                            <h3>{`${weather.dt_txt} in ${city_name}`}</h3>
                        </div>
                        <div className="row">
                            <div className="col">
                                <img src="img/sun.svg" alt="" />
                                <p>Weather</p>
                            </div>
                            <div className="col">
                                <p>{`${weather.weather[0].main}, ${weather.weather[0].description}`}</p>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col">
                                <img src="img/temp.svg" alt="" />
                                <p>Temp</p>

                            </div>
                            <div className="col">
                                <p>{Math.round(weather.main.temp - 273.15)}</p>
                                <p> &ordm;C</p>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col">
                                <img src="img/feels-like.svg" alt="" />
                                <p>Feels Like</p>

                            </div>
                            <div className="col">
                                <p>{Math.round(weather.main.feels_like - 273.15)}</p>
                                <p> &ordm;C</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <img src="img/humidity.svg" alt="" />
                                <p>Humidity</p>

                            </div>
                            <div className="col">
                                <p>{weather.main.humidity}</p>
                                <p>%</p>

                            </div>
                        </div>

                        <div className="row">
                            <div className="col">
                                <img src="img/wind.svg" alt="" />
                                <p>Wind Speed</p>

                            </div>
                            <div className="col">
                                <p>{weather.wind.speed}</p>
                                <p>m/s</p>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col">
                                <img src="img/clouds.svg" alt="" />
                                <p>Clouds</p>

                            </div>
                            <div className="col">
                                <p>{weather.clouds.all}</p>
                                <p>%</p>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

Weather.propTypes = {
    weatherList: PropTypes.object,
}
Weather.defaultProps = {
    weatherList: {
        city_name: '',
        list: []
    }
}

export default Weather
