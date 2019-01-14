import { createStore, applyMiddleware, combineReducers } from 'redux';
import promiseMiddleware from  'redux-promise-middleware';

import unsplashReducer from  './ducks/unsplashReducer';

const combinedReducers = combineReducers({
    unsplash: unsplashReducer
});

const store = createStore(
    combinedReducers,
    applyMiddleware(promiseMiddleware())
);

export default store;