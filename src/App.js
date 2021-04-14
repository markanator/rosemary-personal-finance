import { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import Layout from './components/common/layout/layout';

const Home = lazy(() => import('./pages/home'));
const DashBoard = lazy(() => import('./pages/dashboard'));
const Transaction = lazy(() => import('./pages/transaction'));

function App() {
  return (
    <>
      <Switch>
        <Suspense fallback={<div>loading...</div>}>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/dashboard">
            <DashBoard />
          </Route>
          <Route path="/transactions">
            <Transaction />
          </Route>
        </Suspense>
        <Route>
          {/* make this into a single component */}
          <Layout>
            <h1>Error</h1>
            <p>Page does not exists.</p>
          </Layout>
        </Route>
      </Switch>
    </>
  );
}

export default App;
