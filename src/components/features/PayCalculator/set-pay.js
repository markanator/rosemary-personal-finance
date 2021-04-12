import React, { Component } from 'react';
import Settings from './set-pay-components/Settings';
import ShiftTimes from './set-pay-components/ShiftTimes';
import Results from './set-pay-components/Results';

class SetPay extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
    this.initialState = this.state;
  }

  componentDidMount = () => {
    const savedPayRate = localStorage.getItem('pay_rate');
    const payRateInput = document.getElementById('pay_rate');
    const savedMultiplier = localStorage.getItem('multiplier');
    const multiplierInput = document.getElementById('multiplier');

    if (savedPayRate !== null) {
      payRateInput.value = savedPayRate;
      this.setState({ pay_rate: savedPayRate });
    }
    if (savedMultiplier !== null) {
      multiplierInput.value = savedMultiplier;
      this.setState({ multiplier: savedMultiplier });
    }
  };

  clearSettings = () => {
    document.getElementById('settings').reset();
    localStorage.clear();
  };

  resetState = () => {
    this.setState(this.initialState);
    document.getElementById('shift_times').reset();
  };

  setPayRate = event => {
    this.setState({ pay_rate: event.target.value });
    localStorage.setItem('pay_rate', event.target.value);
  };

  setMultiplier = event => {
    this.setState({ multiplier: event.target.value });
    localStorage.setItem('multiplier', event.target.value);
  };

  setStartTime = event => {
    this.setState({ start_time: event.target.value });
  };

  setStartBreak = event => {
    var breaks = this.state.breaks;
    breaks[0] = {
      start_break: event.target.value,
      end_break: breaks[0].end_break,
    };
    this.setState({ breaks: breaks });
  };

  setEndBreak = event => {
    var breaks = this.state.breaks;
    breaks[0] = {
      start_break: breaks[0].start_break,
      end_break: event.target.value,
    };
    this.setState({ breaks: breaks });
  };

  setEndTime = event => {
    this.setState({ end_time: event.target.value });
  };

  render() {
    return (
      <div>
        <Settings
          setPayRate={this.setPayRate}
          setMultiplier={this.setMultiplier}
        />
        <button onClick={this.clearSettings}>Clear Settings</button>
        <ShiftTimes
          setStartTime={this.setStartTime}
          setStartBreak={this.setStartBreak}
          setEndBreak={this.setEndBreak}
          setEndTime={this.setEndTime}
        />
        <button onClick={this.resetState}>Reset Times</button>
        <Results results={this.state} />
      </div>
    );
  }
}

export default SetPay;
