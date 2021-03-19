import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import styles from './topnavbar.module.css';

export default function TopNavBar() {
  return (
    <header className={styles.header}>
      <nav className={styles.navbar__main}>
        <div className={styles.navbar__logo_wrapper}>
          <Link to="/">
            <img src="/assets/images/logo.png" alt="rosemary" />
          </Link>
        </div>
        <ul className={styles.navbar__navlist}>
          <li>
            <NavLink className={styles.navbar__links} to="/dashboard">
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink className={styles.navbar__links} to="/transactions">
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
    <Link to="/" className={styles.navbar__loginbtn}>
      {text}
    </Link>
  );
};
