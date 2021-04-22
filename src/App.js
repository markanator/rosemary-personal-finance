import { Switch, Route, Redirect } from 'react-router-dom';
import Layout from './components/common/layout/layout';
import useAppContext, {
  RosemaryContextProvider,
} from './data/hooks/AppContext';
import DashBoard from './pages/dashboard';
import Test from './pages/fireStoreTest';
import Home from './pages/home';
import Transaction from './pages/transaction';

function App() {
  const userState = useAppContext();
  console.log('use User', userState);
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/dashboard">
          {userState.isSignedIn ? <DashBoard /> : <Redirect to="/" />}
        </Route>
        <Route path="/transactions">
          {userState.isSignedIn ? <Transaction /> : <Redirect to="/" />}
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
