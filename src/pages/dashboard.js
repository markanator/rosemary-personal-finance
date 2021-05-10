import React, { useEffect, useState } from 'react';
import Layout from '../components/common/layout/layout';
import { usersCollection } from '../data/firebase';
import PayCalculator from '../features/dashboard/pay-calculator/pay-calculator';
import PieChartRender from '../features/dashboard/PieChartParser/pie-chart';
// import useUserData from '../data/hooks/use-user-data';
import PieChartParser from '../features/dashboard/PieChartParser/pie-chart_parser';
import DashboardTableSection from '../features/dashboard/TransactionTableSm';
import useUser from '../hooks/use-user';

export default function DashBoard() {
  const [transactions, setTransactions] = useState([]);
  const [banks, setBanks] = useState([]);
  const { isLoading, user } = useUser();

  useEffect(() => {
    const unsub = usersCollection.doc(user.uid).onSnapshot((snapshot) => {
      setTransactions(snapshot.data().transactions);
      setBanks(snapshot.data().banks);
      // console.log('SNAPP', snapshot.data());
    });
    return () => {
      unsub();
    };
  }, []);

  if (isLoading === 'loading') {
    return (
      <Layout title="DashBoard">
        <p>Loading...</p>
      </Layout>
    );
  }

  // console.log('USER DATA', transactions);

  let finalResults;
  let cashFlowRatio;
  if (transactions.length > 0) {
    finalResults = PieChartParser(transactions);
    cashFlowRatio = finalResults.filter((item) => {
      if (item.category === 'Income' || item.category === 'Bills') {
        return item;
      }
    });
  }

  return (
    <Layout title="DashBoard">
      <div className="pie_section">
        <section className="pie_wrapper">
          {transactions.length < 1 ? (
            <div
              className="empty__pies"
              style={{
                backgroundImage: "url('/assets/images/example_pie_charts.png')",
              }}
            >
              <h1>No transactions found.</h1>
              <p>Start by adding your bank details below...</p>
            </div>
          ) : (
            <>
              <PieChartRender title="CashFlow" chartData={cashFlowRatio} />
              <PieChartRender title="Spending" chartData={finalResults} />
            </>
          )}
        </section>
        <DashboardTableSection transactions={transactions} banks={banks} />
        <PayCalculator />
      </div>
    </Layout>
  );
}
