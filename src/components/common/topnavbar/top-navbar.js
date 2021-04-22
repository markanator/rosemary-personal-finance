import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './topnavbar.scss';

export default function TopNavBar() {
  return (
    <header className="nav-header">
      <nav className="navbar__main">
        <div className="navbar__logo_wrapper">
          <Link to="/">
            <img src="/assets/images/logo.png" alt="rosemary" />
          </Link>
        </div>
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
        <div>
          <LoginButton text="Login" />
        </div>
      </nav>
    </header>
  );
}

const LoginButton = ({ text }) => {
  return (
    <Link to="/" className="navbar__loginbtn">
      {text}
    </Link>
  );
};
