import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './topnavbar.module.css';

export default function TopNavBar() {
  return (
    <header style={{ width: '100%' }}>
      <nav className={styles.navbar__main}>
        <div className={styles.navbar__logo_wrapper}>
          <img src="/assets/images/logo.png" alt="rosemary" />
        </div>
        <ul className={styles.navbar__links}>
          <li>
            <NavLink to="/dashboard">Dashboard</NavLink>
          </li>
          <li>
            <NavLink to="/transactions">Transactions</NavLink>
          </li>
          <li>3</li>
          <li>4</li>
        </ul>
      </nav>
    </header>
  );
}
