import React from 'react';
import Layout from '../components/common/layout/layout';
import DashboardTableSection from '../components/features/dashboard/TransactionTableSm';
import PayCalculator from '../components/features/PayCalculator/pay-calculator';

export default function DashBoard() {
  return (
    <Layout>
      Dash Board.
      <DashboardTableSection />
      <PayCalculator />
    </Layout>
  );
}
