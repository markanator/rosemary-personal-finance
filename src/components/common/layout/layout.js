import React from 'react';
import TopNavBar from '../topnavbar/TopNavBar';
import PageFooter from '../simplefooter/page-footer';

/**
 * This component sandwiches the children content with a navigation bar and footer
 *
 * @param {*} children Any React content
 *
 */
export default function Layout({ children }) {
  return (
    <div>
      <TopNavBar />
      {children}
      <PageFooter />
    </div>
  );
}
