import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Homepage from './pages/HomePage';
import Prijzenpage from './pages/PrijzenPage';
import reportWebVitals from './reportWebVitals';

console.log(window.location.href);

if (window.location.href.toLowerCase().includes("?page=prijzen")) {
  ReactDOM.render(
    <React.StrictMode>
      <Prijzenpage />
    </React.StrictMode>,
    document.getElementById('root')
  );
} else if (window.location.href.toLowerCase().includes("?page=contact")) {
  ReactDOM.render(
    <React.StrictMode>
      <Prijzenpage />
    </React.StrictMode>,
    document.getElementById('root')
  );
} else {
  ReactDOM.render(
    <React.StrictMode>
      <Homepage />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
