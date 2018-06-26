import React, { Component } from 'react';
import ForecastExtended from './../components/ForecastExtended';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


class ForecastExtendedContainar extends Component {


    render() {
        return (
            this.props.city && 
            <ForecastExtended 
                city={this.props.city} />
        );
    }
}

ForecastExtendedContainar.propTypes = {
    city: PropTypes.string.isRequired,
}

const mapStateToProps = ({ city }) => ({ city });


export default connect(mapStateToProps, null)(ForecastExtendedContainar);;