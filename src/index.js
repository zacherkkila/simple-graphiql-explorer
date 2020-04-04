import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

console.log(process.env.REACT_APP_GRAPHQL_URL)

ReactDOM.render(
  <React.StrictMode>
    <App url={process.env.REACT_APP_GRAPHQL_URL || "http://localhost:8888/graphql"}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
