
export const SET_CITY = 'SET_CITY';

export const setCity = payload => ({ type: SET_CITY, payload });

const url = 'http://api.openweathermap.org/data/2.5/forecast';
const api_key = "b830ba2299bbb2c76d9e238e8830e53f";


export const fetchForecast = payload => {
    return dispatch => {
        const url_forecast = `${url}?q=${city}&appid=${api_key}`;

        fetch(url_forecast).then(
            data => (data.json())
        ).then(
            weather_data => {
                const forecastData = transformForecast(weather_data);
                console.log("forecastData", forecastData);
            }
        );
    };
};