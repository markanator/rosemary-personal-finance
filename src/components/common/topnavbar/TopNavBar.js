import React from 'react';
import { Link } from 'react-router-dom';
import useAppContext from '../../../data/hooks/AppContext';
import styles from './topnavbar.module.css';

export default function TopNavBar() {
  const { isSignedIn, user } = useAppContext();

  return (
    <header className={styles.header}>
      <nav className={styles.navbar__main}>
        <div className={styles.navbar__logo_wrapper}>
          <Link to={isSignedIn ? '/dashboard' : '/'}>
            <img src="/assets/images/logo.png" alt="rosemary" />
          </Link>
        </div>
        {!isSignedIn && !user ? (
          <div className={styles.navbar__navlist}></div>
        ) : (
          <ul className={styles.navbar__navlist}>
            <li>
              <Link className={styles.navbar__links} to="/dashboard">
                Dashboard
              </Link>
            </li>
            <li>
              <Link className={styles.navbar__links} to="/transactions">
                Transactions
              </Link>
            </li>
          </ul>
        )}
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
