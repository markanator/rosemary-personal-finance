import React from 'react';
import { PieChart } from 'react-minimal-pie-chart';
import './pie-chart.css';
import MOCK_DATA from '../../../tempData/trxList.json';
import PieChartParser from './pie-chart_parser';
import formatMoney from '../../../utils/formatMoney';

const [finalResults] = PieChartParser(MOCK_DATA);

const lableStyle = {
  fontSize: '5px',
};

export default function PieChartRender({ title }) {
  const myData = [
    finalResults.Bills,
    finalResults.Entertainment,
    finalResults.CreditCard,
    finalResults.FastFood,
    finalResults.Other,
  ];

  return (
    <div className="chart">
      <div className="title">
        <h3>{title}</h3>
      </div>
      <PieChart
        className="pie_chart"
        // your data
        data={myData}
        // width and height of the view box
        viewBoxSize={[100, 100]}
        startAngle={270}
        label={({ dataEntry }) => Math.round(dataEntry.percentage) + '%'}
        labelStyle={lableStyle}
      />
      <ul className="details">
        {myData.slice(0, 5).map((element) => {
          const amount = formatMoney(element.value);
          return (
            <li key={element.value}>
              <span className="label">
                <span
                  style={{ backgroundColor: `${element.color}` }}
                  className="circle"
                ></span>
                <strong>{amount}</strong>
                <p>{element.category}</p>
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
