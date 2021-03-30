import React from 'react';
import Layout from '../components/common/layout/layout';
import DashboardTableSection from '../components/features/dashboard/TransactionTableSm/DashboardTableSection';

export default function DashBoard() {
  return (
    <Layout>
      Dash Board.
      <DashboardTableSection />
    </Layout>
  );
}
