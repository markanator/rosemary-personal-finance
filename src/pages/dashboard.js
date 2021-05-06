import React from 'react';
import Layout from '../components/common/layout/layout';

import PieChartRender from '../features/dashboard/PieChartParser/pie-chart';
import DashboardTableSection from '../features/dashboard/TransactionTableSm';
import PayCalculator from '../features/dashboard/pay-calculator/pay-calculator';
// data
import MockData from '../tempData/trxList.json';
import PieChartParser from '../features/dashboard/PieChartParser/pie-chart_parser';

// console.log(Cashflow);

export default function DashBoard() {
  const finalResults = PieChartParser(MockData);

  const tempCashFlow = finalResults.filter((item) => {
    if (item.category === 'Income' || item.category === 'Bills') {
      return item;
    }
  });

  return (
    <Layout title="DashBoard">
      <div className="pie_section">
        <section className="pie_wrapper">
          <PieChartRender title="CashFlow" chartData={tempCashFlow} />
          <PieChartRender title="Spending" chartData={finalResults} />
        </section>
        <DashboardTableSection />
        <PayCalculator />
      </div>
    </Layout>
  );
}
