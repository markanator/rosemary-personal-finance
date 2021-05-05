import React from 'react';
import AddBankAccount from '../components/AddBankAccountModal/AddBackAccountModal';
import Layout from '../components/common/layout/layout';
import GetTransaction from '../features/fireStore/get-transactions';

export default function Test() {
  return (
    <Layout>
      <AddBankAccount />
      <GetTransaction />
    </Layout>
  );
}
