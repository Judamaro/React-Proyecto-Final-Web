import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import './index.css';
import reportWebVitals from './reportWebVitals';
import Routes from './Pages/Routes'

ReactDOM.render(
  /* <React.StrictMode>
    <App />
  </React.StrictMode>, */
  <Router>
        <div className="App">
            <Routes />
        </div>
    </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
