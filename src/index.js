import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
//locals
import App from './App';
import './styles/globalStyles.css';
import './styles/cssreset.css';
import './styles/index.scss';

ReactDOM.render(
  <>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </>,
  document.getElementById('root')
);
