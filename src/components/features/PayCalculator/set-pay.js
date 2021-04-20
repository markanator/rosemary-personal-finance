import React, { useEffect, useState } from 'react';
import Settings from './set-pay-components/Settings';
import ShiftTimes from './set-pay-components/ShiftTimes';
import Results from './set-pay-components/Results';

const initialState = {
  pay_rate: 0,
  multiplier: 1,
  start_time: '',
  breaks: [
    {
      start_break: '',
      end_break: '',
    },
  ],
  end_time: '',
};

const SetPay = () => {
  const [payState, setPayState] = useState({ ...initialState });

  useEffect(() => {
    const savedPayRate = localStorage.getItem('pay_rate');
    const payRateInput = document.getElementById('pay_rate');
    const savedMultiplier = localStorage.getItem('multiplier');
    const multiplierInput = document.getElementById('multiplier');

    if (savedPayRate !== null) {
      payRateInput.value = savedPayRate;
      setPayState({ ...payState, pay_rate: savedPayRate });
    }
    if (savedMultiplier !== null) {
      multiplierInput.value = savedMultiplier;
      setPayState({ ...payState, multiplier: savedMultiplier });
    }
  }, []);

  const clearSettings = () => {
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

  const setStartBreak = (event) => {
    var breaks = payState.breaks;
    breaks[0] = {
      start_break: event.target.value,
      end_break: breaks[0].end_break,
    };
    setPayState({ ...payState, breaks: breaks });
  };

  const setEndBreak = (event) => {
    var breaks = payState.breaks;
    breaks[0] = {
      start_break: breaks[0].start_break,
      end_break: event.target.value,
    };
    setPayState({ ...payState, breaks: breaks });
  };

  const setEndTime = (event) => {
    setPayState({ ...payState, end_time: event.target.value });
  };

  return (
    <div>
      <Settings setPayRate={setPayRate} setMultiplier={setMultiplier} />
      <button onClick={clearSettings}>Clear Settings</button>
      <ShiftTimes
        setStartTime={setStartTime}
        setStartBreak={setStartBreak}
        setEndBreak={setEndBreak}
        setEndTime={setEndTime}
      />
      <button onClick={resetState}>Reset Times</button>
      <Results results={payState} />
    </div>
  );
};

export default SetPay;
