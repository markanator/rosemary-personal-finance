import React from 'react';
import GetTransaction from '../components/common/fireStore/get-transactions';
import Layout from '../components/common/layout/layout';

export default function Test() {
  return (
    <Layout>
      <GetTransaction/>
    </Layout>
  );
}
