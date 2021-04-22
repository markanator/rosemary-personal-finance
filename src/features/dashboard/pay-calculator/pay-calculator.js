import React from 'react';
import './pay-calculator.css';
import './select-input.js';
import SimpleSelect from './select-input.js';
import SetPay from './set-pay.js';

function PayCalculator() {
  return (
    <section>
      <div className="section-text">
        <h1>Paycheck Calculator</h1>
        <h4>Easily create paychecks calculated for you!</h4>
      </div>

      <div className="section-box">
        <SimpleSelect />
      </div>

      <div className="section-box">
        <SetPay />
      </div>
    </section>
  );
}

export default PayCalculator;
