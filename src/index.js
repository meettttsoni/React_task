import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Page from './components/Page';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux';
// import { myStore } from './components/reduxproject/Store';
import { mystore } from './components/redux/Store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={mystore}>
    <BrowserRouter>
        <App />
    </BrowserRouter>
    </Provider>
);
