import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';
import {
  CLOUD,
  CLOUDY,
  SUN,
  WINDY,
  SNOW,
  RAIN,
  THUNDER,
  DRIZZLE
} from './../../../constants/weathers';

import './styles.css';


const stateToIconName = weatherState => {
  switch(weatherState) {
    case CLOUD:
      return "cloud";
    case CLOUDY:
      return "cloudy";
    case SUN:
      return "day-sunny";
    case WINDY:
      return "windy";
    case SNOW:
      return "snow";
    case RAIN:
      return "rain";
    case THUNDER:
      return "day-thunderstorm";
    case DRIZZLE:
      return "day-showers";
    default:
      return "day-sunny";
  }
};

const getWeatherIcon = weatherState => {
    return (<WeatherIcons className='wicon' name={stateToIconName(weatherState)} size="4x" />);
};

const WeatherTemperature = ({temperature, weatherState}) => (
  <div className='weatherTemperatureCont'>
    {getWeatherIcon(weatherState)}

    <span className='temperature'>{`${temperature}`}</span>
    <span className='temperatureType'>Cº</span>
  </div>
);

WeatherTemperature.proptypes = {
  temperature: PropTypes.number.isRequired,
  weatherState: PropTypes.string.isRequired,
};


export default WeatherTemperature;
