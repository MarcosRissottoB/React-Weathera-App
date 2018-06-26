import transformForecast from './../services/transformForecast';

export const SET_CITY = 'SET_CITY';
export const SET_FORECAST_DATA = 'SET_FORECAST_DATA';

const setCity = payload => ({ type: SET_CITY, payload });

const setForecastData = payload => ({ type: SET_FORECAST_DATA, payload});

const url = 'http://api.openweathermap.org/data/2.5/forecast';
const api_key = "b830ba2299bbb2c76d9e238e8830e53f";


export const setSelectedCity = payload => {

    return dispatch => {
        const url_forecast = `${url}?q=${payload}&appid=${api_key}`;

        dispatch(setCity(payload));

        return fetch(url_forecast).then(
            data => (data.json())
        ).then(
            weather_data => {
                const forecastData = transformForecast(weather_data);
                console.log("forecastData", forecastData);

                dispatch(setForecastData({city: payload, forecastData}));
            }
        );
    };
};