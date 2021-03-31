import React from 'react';
import SmallTable from './SmallTable';
import './DashTableStyles.scss';
import './table.scss';

export default function DashboardTableSection() {
  return (
    <section className="dashtrx__section">
      <div className="trx__wrapper">
        <div className="--header">
          <h2>Transactions</h2>
        </div>
        <SmallTable />
      </div>
    </section>
  );
}