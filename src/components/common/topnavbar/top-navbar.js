import React from 'react';
import { Link } from 'react-router-dom';
import useAppContext from '../../../hooks/AppContext';
import './topnavbar.scss';

export default function TopNavBar() {
  const { isSignedIn, user, signIn, signOut } = useAppContext();

  let AuthButtonContent;
  if (isSignedIn && user !== null) {
    AuthButtonContent = <LoginButton text="Logout" authFunction={signOut} />;
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
              <Link className="navbar__links" to="/dashboard">
                Dashboard
              </Link>
            </li>
            <li>
              <Link className="navbar__links" to="/transactions">
                Transactions
              </Link>
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
