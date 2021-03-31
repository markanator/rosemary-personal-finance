import React from 'react';
import SpendingRender from '../components/common/dashboard_contents/pie-chart';
import Layout from '../components/common/layout/layout';

export default function DashBoard() {
  return (
    <Layout>
    <SpendingRender/>
    </Layout>
  );
}