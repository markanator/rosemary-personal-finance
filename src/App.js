import { Switch, Route } from 'react-router-dom';
import Layout from './components/common/layout/layout';
import Home from './pages/home';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/dashboard">
          {/* make this into a single component */}
          <Layout>Dashboard</Layout>
        </Route>
        <Route path="/transactions">
          {/* make this into a single component */}
          <Layout>All Transactions</Layout>
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
