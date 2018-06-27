import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { city } from './../reducers/city';


const initialState = {
    city: 'Buenos Aires,ar'
};

<<<<<<< HEAD
const composeEnhancers =  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
=======
const composeEnhancers =  window.__REDUX_DEVTOOLS_EXTENSION__ || compose;
>>>>>>> 389e2d7846f72164fd0384b502493dfde3a482b7

export const store = createStore( city, initialState, composeEnhancers(applyMiddleware(thunk)));

