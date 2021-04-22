import React from 'react';
import Layout from '../components/common/layout/layout';
import GetTransaction from '../features/fireStore/get-transactions';

export default function Test() {
  return (
    <Layout>
      <GetTransaction />
    </Layout>
  );
}
