import React from 'react';
import ReactDOM from 'react-dom';

//locals
import App from './App';
import './styles/globalStyles.css';
import './styles/cssreset.css';
import './styles/index.scss';
import { db } from './data/firebase';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

console.log(db);
