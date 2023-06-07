import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './src/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import store from './components/store';
import { Provider } from 'react-redux';
import ContextProvider from './components/context/context';

// import App2 from './redux-practice-cwh/app';

ReactDOM.render(
    <ContextProvider>
    <Provider store={store}> 
        <BrowserRouter>
        <App />    
    </BrowserRouter>
    </Provider></ContextProvider> , document.querySelector("#root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
