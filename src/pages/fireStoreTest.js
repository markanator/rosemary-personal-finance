import React from 'react';
import AddTransaction from '../components/common/fireStore/add-new-transaction';
import GetTransaction from '../components/common/fireStore/get-transactions';
import Layout from '../components/common/layout/layout';

export default function Test() {
  return (
    <Layout>
      <GetTransaction/>
      <AddTransaction/>
    </Layout>
  );
}
