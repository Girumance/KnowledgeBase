import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import allreducers from "./Reducers"
import {createStore} from "redux"
import {Provider} from "react-redux"
import {ThemeProvider} from "@material-ui/core"
import Theme from "./Theme/Theme"
const myStore = createStore(allreducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


ReactDOM.render(
  <Provider store={myStore}>
    <ThemeProvider theme={Theme}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </ThemeProvider>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
