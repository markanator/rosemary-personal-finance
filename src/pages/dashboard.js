import React from 'react';
import Layout from '../components/common/layout/layout';

import PieChartRender from '../features/dashboard/PieChartParser/pie-chart';
import DashboardTableSection from '../features/dashboard/TransactionTableSm';
import PayCalculator from '../features/dashboard/pay-calculator/pay-calculator';

export default function DashBoard() {
  return (
    <Layout title="DashBoard">
      <section className="pie_section">
        <div className="pie_wrapper">
          <PieChartRender title="CashFlow" />
          <PieChartRender title="Spending" />
        </div>
        <DashboardTableSection />
        <PayCalculator />
      </section>
    </Layout>
  );
}
