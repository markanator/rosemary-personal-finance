import React from 'react';
import Layout from '../components/common/layout/layout';
import formatMoney from '../utils/formatMoney';
import FullTable from '../features/transactions-page/main-table';

export default function Transaction() {
  return (
    <Layout>
      <section className="transaction__main">
        <div className="transaction__wrapper">
          <aside className="transaction__sidebar">
            <div className="sidebar__container">
              <h2>My Accounts</h2>
              <hr className="--divider" />
              <ul className="sidebar__accounts">
                <SideAccountBox
                  Account="Bank of America"
                  Type="Checkings"
                  Balance={555500}
                  Color="#EB4848"
                />
                <SideAccountBox
                  Account="Chase Bank"
                  Type="Checkings"
                  Balance={265500}
                  Color="#317BE9"
                />
              </ul>
            </div>
          </aside>
          <section className="transaction__table">
            <FullTable />
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
