import React from 'react';
import Layout from '../components/common/layout/layout';
import DashboardTableSection from '../components/features/dashboard/TransactionTableSm';
import PayCalculator from '../components/features/PayCalculator/pay-calculator';
import PieChartRender from '../components/common/dashboard_contents/pie-chart';
import '../styles/dashboard.css';
import useUser from '../data/hooks/use-user';
import useUserData from '../data/hooks/use-user-data';

export default function DashBoard() {
  const userState = useUser();
  console.log(userState.user.uid);

  const userData = useUserData(userState.user.uid);
  console.log(userData);

  return (
    <Layout>
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
