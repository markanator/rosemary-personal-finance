import React from 'react';
import Layout from '../components/common/layout/layout';
import DashboardTableSection from '../components/features/dashboard/TransactionTableSm';
import PayCalculator from '../components/features/PayCalculator/pay-calculator';
import PieChartRender from '../components/common/dashboard_contents/pie-chart';
import '../styles/dashboard.css';

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
