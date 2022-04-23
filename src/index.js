import React from 'react';
import ReactDOM from 'react-dom';
import './asset/css/index.css';
import App from './container/App';

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import "@reach/dialog/styles.css";
import 'react-multi-carousel/lib/styles.css';
import 'react-toastify/dist/ReactToastify.css';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
