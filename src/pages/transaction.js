import React from 'react';
import Layout from '../components/common/layout/layout';
import FullTable from '../components/features/transactionsPage/MainTable';

export default function Transaction() {
  return (
    <Layout>
      <main className="transaction__main">
        <h1 className="--header">Transaction.</h1>
        <div className="transaction__wrapper">
          <aside className="transaction__sidebar">sidebar</aside>
          <section className="transaction__table">
            <FullTable />
          </section>
        </div>
      </main>
    </Layout>
  );
}
