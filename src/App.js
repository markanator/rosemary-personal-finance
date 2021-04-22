import { Route, Switch } from 'react-router-dom';
import Layout from './components/common/layout/layout';
import { RosemaryContextProvider } from './data/hooks/AppContext';
import DashBoard from './pages/dashboard';
import Test from './pages/fireStoreTest';
import Home from './pages/home';
import Transaction from './pages/transaction';
import ProtectedRoute from './utils/ProtectedRoute';

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <ProtectedRoute path="/dashboard">
          <DashBoard />
        </ProtectedRoute>
        <ProtectedRoute path="/transactions">
          <Transaction />
        </ProtectedRoute>
        <Route path="/test">
          <Test />
        </Route>
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

function ContextApp() {
  return (
    <>
      <RosemaryContextProvider>
        <App />
      </RosemaryContextProvider>
    </>
  );
}

export default ContextApp;
