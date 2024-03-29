import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-loading-skeleton/dist/skeleton.css'
import Context from './context/Context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Context>
    <App />
  </Context>
);
