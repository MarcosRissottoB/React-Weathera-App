import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const Location = ({ city }) => (
  //City viene en props, pero se maneja directamente con 'destructuring object'.
  <div className='locationCont'>
      <h1>
        {city}
      </h1>
  </div>
);

Location.propTypes = {
    city: PropTypes.string.isRequired,
};

export default Location;
