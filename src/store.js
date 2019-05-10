import { createStore, applyMiddleware, combineReducers } from 'redux';
import promiseMiddleware from  'redux-promise-middleware';

import unsplashReducer from  './ducks/unsplashReducer';
import weatherReducer from './ducks/weatherReducer';

const combinedReducers = combineReducers({
    weather: weatherReducer,
    unsplash: unsplashReducer
});

const store = createStore(
    combinedReducers,
    applyMiddleware(promiseMiddleware())
);

export default store;