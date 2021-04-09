import React from 'react';
import './pay-calculator.css';
import './select-input.js';
import SimpleSelect from './select-input.js';
import SetPay from './set-pay.js';

function PayCalculator() {
  return (
    <main>
      <div className="columns">
        <div className="column">
          <h1>Paycheck Calculator</h1>
          <h4>Easily create paychecks calculated for you!</h4>
          <SimpleSelect />
          <SetPay />
        </div>

        <div className="result-column"></div>
      </div>
    </main>
  );
}

export default PayCalculator;
