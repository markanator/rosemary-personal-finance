import { Avatar } from '@material-ui/core';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import useAppContext from '../../../hooks/AppContext';
import './topnavbar.scss';

export default function TopNavBar() {
  const { isSignedIn, user, signIn, signOut } = useAppContext();

  let AuthButtonContent;
  if (isSignedIn && user !== null) {
    AuthButtonContent = (
      <div style={{ display: 'inline-flex' }}>
        <LoginButton text="Logout" authFunction={signOut} />
        <Avatar
          alt={user.displayName}
          src={user.photoURL}
          style={{ marginLeft: '1rem' }}
        />
      </div>
    );
  } else {
    AuthButtonContent = <LoginButton text="Login" authFunction={signIn} />;
  }

  return (
    <header className="nav-header">
      <nav className="navbar__main">
        <div className="navbar__logo_wrapper">
          <Link to={isSignedIn ? '/dashboard' : '/'}>
            <img
              src="/assets/images/logo.png"
              alt="rosemary"
              height="auto"
              width="50px"
            />
          </Link>
        </div>
        {!isSignedIn && !user ? (
          <div className="navbar__navlist"></div>
        ) : (
          <ul className="navbar__navlist">
            <li>
              <NavLink className="navbar__links" to="/dashboard">
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink className="navbar__links" to="/transactions">
                Transactions
              </NavLink>
            </li>
          </ul>
        )}
        <div>{AuthButtonContent}</div>
      </nav>
    </header>
  );
}

const LoginButton = ({ text, authFunction }) => {
  return (
    <Link to="/" className="navbar__loginbtn" onClick={authFunction}>
      {text}
    </Link>
  );
};
