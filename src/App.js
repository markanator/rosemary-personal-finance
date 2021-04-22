import { Route, Switch } from 'react-router-dom';
import { RosemaryContextProvider } from './data/hooks/AppContext';
import DashBoard from './pages/dashboard';
import Error from './pages/Error';
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
          <Error />
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
