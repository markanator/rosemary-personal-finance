import { Switch, Route } from 'react-router-dom';
import Layout from './components/common/layout/layout';
import DashBoard from './pages/dashboard';
import Test from './pages/fireStoreTest';
import Home from './pages/home';
import Transaction from './pages/transaction';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/dashboard">
          <DashBoard />
        </Route>
        <Route path="/transactions">
          <Transaction />
        </Route>
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
    </div>
  );
}

export default App;
