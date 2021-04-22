import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

//locals
import App from './App';
import './styles/index.scss';
import { db } from './data/firebase';

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);

console.log(db);
