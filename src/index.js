import React from 'react';
import ReactDOM from 'react-dom';
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'

import './index.css';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import { reducers } from './reducers/index'

import PictureOfDay from './containers/pictureOfDayContainer';

const loggerMiddleware = createLogger();

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducers,
    composeEnhancer(applyMiddleware(
        thunkMiddleware, // lets us dispatch() functions
        loggerMiddleware // neat middleware that logs actions
    ))
);
ReactDOM.render(
    <Provider store={store}>
        <PictureOfDay />
    </Provider>, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
