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
  var timeString = '';
  if (time24 !== '' || time24 !== null) {
    timeString = time24;
    var H = +timeString.substr(0, 2);
    var h = H % 12 || 12;
    //h = (h < 10)?("0"+h):h;  // leading 0 at the left for 1 digit hours
    var ampm = H < 12 ? ' am' : ' pm';
    timeString = h + timeString.substr(2, 3) + ampm;
  }
  return timeString;
};

const calculateHours = (results) => {
  // Initialize variables
  let hoursWorked = 0;
  let minutesWorked = 0;
  let hoursOnBreak = 0;
  let minutesOnBreak = 0;
  let totalWorkHours = 0;
  let totalBreakHours = 0;
  let totalShiftHours = 0;
  let totalAmount = 0;

  // Fetch data from props
  const payRate = results.pay_rate;
  const multiplier = results.multiplier;
  const startTime = results.start_time;
  const endTime = results.end_time;
  const startBreak = results.breaks[0].start_break;
  const endBreak = results.breaks[0].end_break;

  if (startTime !== '' && endTime !== '') {
    // Start Time
    const startTimeHour = startTime.split(':')[0];
    const startTimeMin = startTime.split(':')[1];
    const startTimeInHours = Number(startTimeHour) + startTimeMin / 60;

    // End Time
    const endTimeHour = endTime.split(':')[0];
    const endTimeMin = endTime.split(':')[1];
    const endTimeInHours = Number(endTimeHour) + endTimeMin / 60;

    if (startBreak !== '' && endTime !== '') {
      // Start Break
      const startBreakHour = startBreak.split(':')[0];
      const startBreakMin = startBreak.split(':')[1];
      const startBreakInHours = Number(startBreakHour) + startBreakMin / 60;

      // End Break
      const endBreakHour = endBreak.split(':')[0];
      const endBreakMin = endBreak.split(':')[1];
      const endBreakInHours = Number(endBreakHour) + endBreakMin / 60;

      totalBreakHours = endBreakInHours - startBreakInHours;
    }
    // Total Hours
    totalShiftHours = endTimeInHours - startTimeInHours;
    totalWorkHours = totalShiftHours - totalBreakHours;
    totalAmount = payRate * multiplier * totalWorkHours;

    // Rounded Values
    hoursWorked = Math.floor(totalWorkHours);
    minutesWorked = Math.round((totalShiftHours % 1) * 60);
    hoursOnBreak = Math.floor(totalBreakHours);
    minutesOnBreak = Math.round((totalBreakHours % 1) * 60);

    // Fixed Decimal Places
    totalWorkHours = totalWorkHours.toFixed(2);
    totalBreakHours = totalBreakHours.toFixed(2);
    totalAmount = totalAmount.toFixed(2);
  }
  return {
    hoursWorked: hoursWorked,
    minutesWorked: minutesWorked,
    hoursOnBreak: hoursOnBreak,
    minutesOnBreak: minutesOnBreak,
    totalWorkHours: totalWorkHours,
    totalBreakHours: totalBreakHours,
    totalAmount: totalAmount,
  };
};
