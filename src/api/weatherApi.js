import axiosClient from "./axiosClient"

const WeatherApi = {
    call5day3hour: (params) => {
        const url = '/forecast'
        return axiosClient.get(url, { params })
    }
}

export default WeatherApi