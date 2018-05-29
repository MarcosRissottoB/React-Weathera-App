import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import LocationList from './components/LocationList';
import './App.css';

const cities = [
    'Buenos Aires,ar',
    'Santiago de chile,ch',
    'Madrid,es',
    'Bogota,col'
];

class App extends Component {

    // handleWeatherLocationClick = city =>    {
    //     console.log("handleWeatherLocationClick");
    // };

    handleSelectedLocation = city => {
        console.log(`handleWeatherLocationClick ${city}`);
    };
    
    render(){
        return (
            <MuiThemeProvider>
                <div className='App'>
                    <LocationList cities={cities}
                    onSelectedLocation={this.handleSelectedLocation} ></LocationList>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;