import React from 'react';
import Layout from '../components/common/layout/layout';

import PieChartRender from '../features/dashboard/PieChartParser/pie-chart';
import DashboardTableSection from '../features/dashboard/TransactionTableSm';
import PayCalculator from '../features/dashboard/pay-calculator/pay-calculator';

export default function DashBoard() {
  return (
    <Layout title="DashBoard">
      <div className="pie_section">
        <section className="pie_wrapper">
          <PieChartRender title="CashFlow" />
          <PieChartRender title="Spending" />
        </section>
        <DashboardTableSection />
        <PayCalculator />
      </div>
    </Layout>
  );
}
