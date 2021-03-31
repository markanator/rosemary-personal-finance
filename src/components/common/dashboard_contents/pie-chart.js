import React from 'react';
import { PieChart } from 'react-minimal-pie-chart';
import './pie-chart.css';
import MOCK_DATA from '../../../tempData/trxList.json';
import PieChartParser from './pie-chart_parser';

const [finalResults, totalSum] = PieChartParser(MOCK_DATA);

// export default function SpendingRender() {
// const myData = [
//     finalResults.Bills,
//     finalResults.Entertainment,
//     finalResults.Other,
//     finalResults.CreditCard,
//     finalResults.FastFood,
//     finalResults.Income,
//   ];
// }

export default function SpendingRender() {
  const myData = [
    finalResults.Bills,
    finalResults.Entertainment,
    finalResults.Other,
    finalResults.CreditCard,
    finalResults.FastFood,
    finalResults.Income,
  ];

  return (
    <div className="chart">
      <PieChart
        // your data
        data={myData}
        // width and height of the view box
        viewBoxSize={[100, 100]}
        startAngle={270}
      />
      <div className="details">
        <ul className="colorReference_red">
          {myData[0].category}: ${myData[0].value}
        </ul>
        <ul className="colorReference_orange">
          {myData[1].category}: ${myData[1].value}
        </ul>
        <ul className="colorReference_yellow">
          {myData[2].category}: ${myData[2].value}
        </ul>
        <ul className="colorReference_green">
          {myData[3].category}: ${myData[3].value}
        </ul>
        <ul className="colorReference_blue">
          {myData[4].category}: ${myData[4].value}
        </ul>
        <ul className="colorReference_purple">
          {myData[5].category}: ${myData[5].value}
        </ul>
        <ul>Total: ${totalSum}</ul>
      </div>
    </div>
  );
}
