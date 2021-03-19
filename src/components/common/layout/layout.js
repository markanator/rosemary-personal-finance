import React from 'react';
import TopNavBar from '../topnavbar/TopNavBar';

export default function Layout({ children }) {
  return (
    <div>
      <TopNavBar />
      {children}
      {/* ADD FOOTER HERE */}
    </div>
  );
}
