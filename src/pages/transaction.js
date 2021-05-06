import React, { useEffect, useState } from 'react';
import Layout from '../components/common/layout/layout';
import formatMoney from '../utils/formatMoney';
import FullTable from '../features/transactions-page/main-table';
import useUser from '../hooks/use-user';
import { usersCollection } from '../data/firebase';

export default function Transaction() {
  const [transactions, setTransactions] = useState([]);
  const [banks, setBanks] = useState([]);
  const { isLoading, user } = useUser();

  useEffect(() => {
    const unsub = usersCollection.doc(user.uid).onSnapshot((snapshot) => {
      setTransactions(snapshot.data().transactions);
      setBanks(snapshot.data().banks);
    });
    return () => {
      unsub();
    };
  }, []);

  if (isLoading === 'loading') {
    return (
      <Layout title="Transactions">
        <p>Loading...</p>
      </Layout>
    );
  }

  return (
    <Layout title="All Transactions">
      <section className="transaction__main">
        <div className="transaction__wrapper">
          <aside className="transaction__sidebar">
            <div className="sidebar__container">
              <h2>My Accounts</h2>
              <hr className="--divider" />
              <ul className="sidebar__accounts">
                {banks.length > 0 ? (
                  banks.map((bank) => (
                    <SideAccountBox
                      key={bank.bank_id}
                      Account={bank.bankName}
                      Type={bank.acctType}
                      Balance={bank.acctAmount}
                      Color={
                        bank.acctType === 'Checking' ? '#317BE9' : '#EB4848'
                      }
                    />
                  ))
                ) : (
                  <li>
                    <p>Please enter a bank!</p>
                  </li>
                )}
              </ul>
            </div>
          </aside>
          <section className="transaction__table">
            <FullTable transactions={transactions} banks={banks} />
          </section>
        </div>
      </section>
    </Layout>
  );
}

const SideAccountBox = ({ Account, Type, Balance, Color }) => {
  return (
    <li className="account__box">
      <span className="image" style={{ backgroundColor: Color }}>
        {Account[0].toLocaleUpperCase()}
      </span>
      <div className="details__container">
        <div className="--main">
          <h4>{Account}</h4>
          <p>
            {Type}: {formatMoney(Balance)}
          </p>
        </div>
        <div className="--arrow">&gt;</div>
      </div>
    </li>
  );
};
