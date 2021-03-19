import { Switch, Route } from 'react-router-dom';
import Home from './pages/home';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/dashboard">Dashboard</Route>
        <Route path="/transactions">All Transactions</Route>
        <Route>
          <h1>Error</h1>
          <p>Page does not exists.</p>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
