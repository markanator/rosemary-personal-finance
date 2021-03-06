import React, { useState } from 'react';
import Results from './set-pay-components/Results';
import Settings from './set-pay-components/Settings';
import ShiftTimes from './set-pay-components/ShiftTimes';
import './set-pay.css';
const initialState = {
  pay_rate: 0,
  multiplier: 1,
  start_time: '',
  end_time: '',
};

const SetPay = () => {
  const [payState, setPayState] = useState(initialState);

  const clearSettings = () => {
    setPayState(initialState);
    document.getElementById('settings').reset();
    localStorage.clear();
  };

  const resetState = () => {
    setPayState(initialState);
    document.getElementById('shift_times').reset();
  };

  const setPayRate = (event) => {
    setPayState({ ...payState, pay_rate: event.target.value });
    localStorage.setItem('pay_rate', event.target.value);
  };

  const setMultiplier = (event) => {
    setPayState({ ...payState, multiplier: event.target.value });
    localStorage.setItem('multiplier', event.target.value);
  };

  const setStartTime = (event) => {
    setPayState({ ...payState, start_time: event.target.value });
  };

  const setEndTime = (event) => {
    setPayState({ ...payState, end_time: event.target.value });
  };

  return (
    <div className="listing">
      <div>
        <Settings setPayRate={setPayRate} setMultiplier={setMultiplier} />
        <button className="btn-primary active" onClick={clearSettings}>
          Clear Settings
        </button>
      </div>
      <div>
        <ShiftTimes setStartTime={setStartTime} setEndTime={setEndTime} />
        <button className="btn-primary active" onClick={resetState} >
          Reset Times
        </button>
      </div>
      <div>
      <Results results={payState} />
      </div>
      
    </div>
  );
};

export default SetPay;
