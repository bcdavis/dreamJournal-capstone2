import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { firebaseConfig } from "./components/fbAuth/firebaseConfig.js"; // need to install firebase
import firebase from "firebase/app";
import './custom.scss'; // bring in custom scss file, which also imports bootstrap.min.css

firebase.initializeApp(firebaseConfig); // initialize app with config file settings

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
