import React from 'react';
import './DashTableStyles.scss';
import SmallTable from './small-table';
import './table.scss';

export default function DashboardTableSection({ transactions, banks }) {
  return (
    <section className="dashtrx__section">
      <div className="trx__wrapper">
        <div className="--header">
          <h2>Transactions</h2>
        </div>
        <SmallTable userTransactions={transactions} userBanks={banks} />
      </div>
    </section>
  );
}
