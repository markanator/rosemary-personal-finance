import React from 'react';
// import style from './ShiftTimes.module.css';

const ShiftTimes = (props) => {
  const { setStartTime, setEndTime } = props;

  return (
    <div className="shiftTimes flexItem">
      <h3>Shift Times</h3>
      <form id="shift_times">
        <div>
          Start Time: &nbsp;{' '}
          <input
            type="time"
            onChange={setStartTime}
            id="start_shift"
            list="times_list"
          />
        </div>

        <div>
          End Time: &nbsp;{' '}
          <input
            type="time"
            onChange={setEndTime}
            id="end_shift"
            list="times_list"
          />
        </div>
      </form>
      <datalist id="times_list">
        <option value="06:00" />
        <option value="07:00" />
        <option value="08:00" />
        <option value="09:00" />
        <option value="10:00" />
        <option value="11:00" />
        <option value="12:00" />
        <option value="13:00" />
        <option value="14:00" />
        <option value="15:00" />
        <option value="16:00" />
        <option value="17:00" />
        <option value="18:00" />
        <option value="19:00" />
        <option value="20:00" />
        <option value="21:00" />
        <option value="22:00" />
        <option value="23:00" />
      </datalist>
      <br />
    </div>
  );
};

export default ShiftTimes;
