import React from 'react';
import PieChartRender from '../components/common/dashboard_contents/pie-chart';
import Layout from '../components/common/layout/layout';
import "../styles/dashboard.css";

export default function DashBoard() {
  return (
    <Layout>
      <section className="pie_section">
        <div className="pie_wrapper">
        <PieChartRender title="CashFlow"/>
        <PieChartRender title="Spending"/>
        </div>
      </section>
    </Layout>
  );
}
