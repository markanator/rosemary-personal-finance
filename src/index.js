import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

//locals
import App from './App';
import './styles/globalStyles.css';
import './styles/cssreset.css';
import './styles/index.scss';
import { db } from './data/firebase';

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);

async function createUser(user) {
  try{
    const docRef = await db.collection("users").add(user)
    console.log(`Successfully added new user at ${docRef.id}`);
  } catch(err) {
    console.log(err);
  }
}

createUser({
  firstName: "Test",
  lastName: "McTester",
  isOnline: false,
  highScore: 0,
  topics: ["Movies, Books"]
})