import React from 'react';
import SmallTable from './small-table';
import './DashTableStyles.scss';
import './table.scss';
import useUser from '../../../hooks/use-user';
import useUserData from '../../../data/hooks/use-user-data';

export default function DashboardTableSection() {
  const userState = useUser();

  const userData = useUserData(userState.user.uid);
  console.log(userData.status);

  if (userData.status === 'loading') return 'loading';

  return (
    <section className="dashtrx__section">
      <div className="trx__wrapper">
        <div className="--header">
          <h2>Transactions</h2>
        </div>
        <SmallTable userTransactions={userData.data.transactions} />
      </div>
    </section>
  );
}
