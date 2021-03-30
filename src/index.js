import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
//locals
import App from './App';
import './styles/globalStyles.css';
import './styles/cssreset.css';
import './styles/videoModal.scss';

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
