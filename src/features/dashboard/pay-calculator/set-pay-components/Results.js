import React from 'react';

const Results = ({ results }) => {
  const data = calculateHours(results);

  return (
    <div className="results flexItem">
      <h3>Results</h3>
      <p id="hours_worked">
        Hours Worked: {data.hoursWorked}h {data.minutesWorked}m |{' '}
        {data.totalWorkHours} hours
      </p>
      <p id="gross_pay">Gross Pay: ${data.totalAmount}</p>
    </div>
  );
};

export default Results;

// eslint-disable-next-line no-unused-vars
const convertTime = (time24) => {
  let timeString = '';
  if (time24 !== '' || time24 !== null) {
    timeString = time24;
    let H = +timeString.substr(0, 2);
    let h = H % 12 || 12;
    //h = (h < 10)?("0"+h):h;  // leading 0 at the left for 1 digit hours
    let ampm = H < 12 ? ' am' : ' pm';
    timeString = h + timeString.substr(2, 3) + ampm;
  }
  return timeString;
};

const calculateHours = (results) => {
  // Initialize variables
  let hoursWorked = 0;
  let minutesWorked = 0;
  let totalWorkHours = 0;
  let totalShiftHours = 0;
  let totalAmount = 0;

  // Fetch data from props
  const payRate = results.pay_rate;
  const multiplier = results.multiplier;
  const startTime = results.start_time;
  const endTime = results.end_time;

  if (startTime !== '' && endTime !== '') {
    // Start Time
    const startTimeHour = startTime.split(':')[0];
    const startTimeMin = startTime.split(':')[1];
    const startTimeInHours = Number(startTimeHour) + startTimeMin / 60;

    // End Time
    const endTimeHour = endTime.split(':')[0];
    const endTimeMin = endTime.split(':')[1];
    const endTimeInHours = Number(endTimeHour) + endTimeMin / 60;

    // Total Hours
    totalShiftHours = endTimeInHours - startTimeInHours;
    totalWorkHours = totalShiftHours;
    totalAmount = payRate * multiplier * totalWorkHours;

    // Rounded Values
    hoursWorked = Math.floor(totalWorkHours);
    minutesWorked = Math.round((totalShiftHours % 1) * 60);

    // Fixed Decimal Places
    totalWorkHours = totalWorkHours.toFixed(2);
    totalAmount = totalAmount.toFixed(2);
  }
  return {
    hoursWorked: Math.abs(hoursWorked),
    minutesWorked: Math.abs(minutesWorked),
    totalWorkHours: Math.abs(totalWorkHours),
    totalAmount: Math.abs(totalAmount),
  };
};
