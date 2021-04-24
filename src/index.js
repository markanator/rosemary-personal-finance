import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

//locals
import App from './App';
import './styles/globalStyles.css';
import './styles/cssreset.css';
import './styles/index.scss';

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);

// async function addTransaction(transaction) {
//   try{
//     const docRef = await db.collection("transactions").add(transaction)
//     console.log(`Successfully added new transaction at ${docRef.id}`);
//   } catch(err) {
//     console.log(err);
//   }
// }

// addTransaction({
//   trx_amount: 30,
//   trx_category: "Entertainment",
//   trx_date: "um..today?",
//   trx_details: "Moive ticket!",
//   trx_type: "Transfer"
// })