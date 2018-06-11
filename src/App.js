import React, { Component } from 'react';
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';
import LocationList from './components/LocationList';
import ForecastExtended from './components/ForecastExtended';
import { setCity } from './actions';
import { store } from './store';

import './App.css';

const cities = [
    'Buenos Aires,ar',
    'Madrid,es',
    'Bogota,col',
    'Ciudad de México,mx'
]; 


class App extends Component {

    constructor () {
        super();

        this.state = { city: null };
    }

    handleSelectedLocation = city => {
        this.setState( {city});
        console.log(`handleWeatherLocationClick ${city}`);
        

        this.props.setCity(city);
    };
    
    render(){
        const { city } = this.state;
        return (
            <MuiThemeProvider>
                <Grid>
                    <Row>
                        <Col xs={12}> 
                            <AppBar title="Weather App" />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={6}>
                            <LocationList cities={cities}
                            onSelectedLocation={this.handleSelectedLocation}></LocationList>
                        </Col>
                        <Col xs={12} md={6}>
                            <Paper zDepth={4} >
                                <div className='detail'>
                                    { city &&
                                        <ForecastExtended city={city}></ForecastExtended>
                                    }
                                </div>
                            </Paper>
                        </Col>
                    </Row>
                </Grid>

                    {/*

                        <Grid fluid>
                    <Row>
                        <Col xs={12} sm={6} md={4}>
                            <div className='red'>MD</div>
                        </Col>
                        <Col xs={12} sm={6} md={4}>
                            <div className='green'>MD</div>
                        </Col>
                        <Col xs={12} sm={6} md={4}>
                            <div className='blue'>MD</div>
                        </Col>
                    </Row>
                </Grid>

                        <div className='pp'>
                            <LocationList cities={cities}
                            onSelectedLocation={this.handleSelectedLocation} 
                            ></LocationList>
                        </div>
                    */}
            </MuiThemeProvider>
        );
    }
}

const mapDispatchToPropsActions = dispatch => ({
    setCity: value => dispatch(setCity(value))
});
 
const AppConnected = connect(null, mapDispatchToPropsActions)(App);


export default AppConnected;