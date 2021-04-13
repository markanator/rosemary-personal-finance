import React, { Component } from 'react';
// import style from './Settings.module.css';

class Settings extends Component {
  render() {
    const { setPayRate, setMultiplier } = this.props;

    return (
      <div className="settings flexItem">
        <h3>Pay Rate</h3>
        <form id="settings">
          <div>
            Pay Rate: &nbsp; $
            <input
              type="number"
              onChange={setPayRate}
              id="pay_rate"
              placeholder="10.00"
              min="10.00"
              max="100.00"
              step="0.01"
            />
          </div>
          <br />
          <div>
            Rate Multiplier:{' '}
            <input
              type="number"
              onChange={setMultiplier}
              id="multiplier"
              placeholder="1.0"
              min="1.0"
              max="10.0"
              step="0.1"
            />{' '}
            x
          </div>
          <br />
        </form>
      </div>
    );
  }
}

export default Settings;
