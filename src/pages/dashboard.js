import React from 'react';
import Layout from '../components/common/layout/layout';
import DashboardTrxTable from '../components/features/dashboard/TransactionTableSm';

export default function DashBoard() {
  return (
    <Layout>
      Dash Board.
      <DashboardTrxTable />
    </Layout>
  );
}
