import React from 'react';
import { Redirect, Route } from 'react-router';
import useAppContext from '../data/hooks/AppContext';

function ProtectedRoute({ children, ...rest }) {
  const { user, isSignedIn } = useAppContext();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user !== null && isSignedIn ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

export default ProtectedRoute;
