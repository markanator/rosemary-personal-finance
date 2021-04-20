import { useEffect, useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Layout from './components/common/layout/layout';
import { auth } from './data/firebase';
import DashBoard from './pages/dashboard';
import Home from './pages/home';
import Transaction from './pages/transaction';

function App() {
  const [user, setUser] = useState(null);
  const isAuthenticated = user !== null;
  
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });
    return unsubscribe;
  }, []);

  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
         <Route path="/dashboard">
           {isAuthenticated ? <DashBoard /> : <Redirect to="/" />}
        </Route>

         <Route path="/transactions">
           {isAuthenticated ? <Transaction /> : <Redirect to="/" />}
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
