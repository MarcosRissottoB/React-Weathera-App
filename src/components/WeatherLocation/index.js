import React, { Component }from 'react';
import PropTypes from 'prop-types';
import CircularProgress from 'material-ui/CircularProgress';
import Location from './Location';
import WeatherData from './WeatherData/index';
import transformWeather from '../../services/transformWeather';
import './styles.css';

const url = 'http://api.openweathermap.org/data/2.5/weather';
const api_key = "b830ba2299bbb2c76d9e238e8830e53f";

// const Weathers = {
//  cloud: "cloud",
//  cloudy: "cloudy",
//  sun: "day-sunny",
//  rain: "rain",
//  snow: "snow",
//  windy: "windy"
// };

class WeatherLocation extends Component {

  constructor({ city }) {
    super();
    this.state = {
      city,
      data: null
    };
  }

  // handleUpdateClick = () => {

  //   fetch(api_weather)
  //     .then( data => {
  //       return data.json();
  //     })
  //     .then(weather_data => {
  //       const data = transformWeather(weather_data);
  //       this.setState({ data });
  //     });

  // }

  componentWillMount() {
    const { city } = this.state;
    const api_weather = `${url}?q=${city}&APPID=${api_key}`;
    fetch(api_weather)
      .then( data => {
        return data.json();
      })
      .then(weather_data => {
        const data = transformWeather(weather_data);
        this.setState({ data });
      });
    //this.handleUpdateClick();
  };

  render = () => {
    const {onWeatherLocationClick} = this.props;
    const {city, data } = this.state;
    return(
      <div className='weatherLocationCont' onclick={onWeatherLocationClick} >
        <Location city={city} />
        {data ? <WeatherData data={data}/> :
         <CircularProgress size={60} thickness={7} />}
        {/* <button onClick={this.handleUpdateClick} >Actualizar</button> */}
      </div>);
  };
}

WeatherLocation.propTypes = {
  city: PropTypes.string,
  onWeatherLocationClick: PropTypes.func
}

export default WeatherLocation;
