import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import '../simplefooter/footer.css';

function PageFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="page__footer">
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
        <div className="navbar__copyright">
          Copyright ⓒ {year}. Rosemary. All rights reserved.
        </div>
      </nav>
    </footer>
  );
}

export default PageFooter;
