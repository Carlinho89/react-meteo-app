import App from './js/components/App'
import React from 'react'
import ReactDOM from "react-dom"
import { Provider } from 'react-redux';

import store from './store';

const wrapper = document.getElementById("react-meteo-app");

wrapper 
    ? ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>, wrapper) 
    : false;