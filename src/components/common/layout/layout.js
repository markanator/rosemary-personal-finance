import React from 'react';
import TopNavBar from '../topnavbar/TopNavBar';

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
      {/* ADD FOOTER HERE */}
    </div>
  );
}
