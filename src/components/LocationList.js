import React from 'react';
import Proptypes from 'prop-types';
import WeatherLocation from './WeatherLocation';


const LocationList = ({ cities, onSelectedLocation }) => {
    const handleWeatherLocationClick = city => {
        console.log("aaaa", city);
        onSelectedLocation(city);
    };

    const strToComponent = cities => {
        cities.map( city =>
             (
                 <WeatherLocation 
                    key={city} 
                    city={city}
                    onWeatherLocationClick={() => handleWeatherLocationClick(city)}
                 />))
    };

    return (
        <div>
            {strToComponent(cities)}
        </div>);
};

LocationList.propTypes = {
    cities: Proptypes.array.isRequired,
    onSelectedLocation: Proptypes.func
}

export default LocationList;