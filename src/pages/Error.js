import React from 'react';
import Layout from '../components/common/layout/layout';

export default function Error() {
  return (
    <Layout>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          margin: '0 auto',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          paddingTop: '4rem',
          paddingBottom: '4rem',
        }}
      >
        <h1>Error</h1>
        <p>Page does not exists.</p>
      </div>
    </Layout>
  );
}
