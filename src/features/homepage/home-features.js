import React from 'react';
import { FcInspection } from 'react-icons/fc';
import { FcPieChart } from 'react-icons/fc';
import { FcCalculator } from 'react-icons/fc';
import './home-features.scss';

function HomeFeatures() {
  return (
    <section className="feature-container">
      <h1> Our Features </h1>
      <h3> The Modern Way to Track & Manage your Personal Financial </h3>

      <section className="columns">
        <div className="column">
          <FcInspection className="app-icon" />
          <h4>Recent Transactions</h4>
          <p>
            This feature can help users keep track of their transactions or
            spending. The feature can help them to manage money.{' '}
          </p>
        </div>

        <div className="column">
          <FcPieChart className="app-icon" />
          <h4>Charts</h4>
          <p>
            Easy-to-understand graphs or charts. Representing users’ account
            activity with categorized graphs and charts.
          </p>
        </div>

        <div className="column">
          <FcCalculator className="app-icon" />
          <h4>Wage Calculator</h4>
          <p>
            It is a flexible tool that allows you to convert your annual
            remuneration to an hourly paycheck, recalculate monthly wage to
            hourly rate, weekly rate.
          </p>
        </div>
      </section>
    </section>
  );
}

export default HomeFeatures;
