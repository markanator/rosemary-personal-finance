import React from 'react';
import TopNavBar from '../topnavbar/top-navbar';
import PageFooter from '../footer/page-footer';
import SEOComponent from './SEO';

/**
 * This component sandwiches the children content with a navigation bar and footer
 *
 * @param {*} children Any React content
 *
 */
export default function Layout({ children, title, description }) {
  return (
    <>
      <SEOComponent title={title} description={description} />
      <TopNavBar />
      <main>{children}</main>
      <PageFooter />
    </>
  );
}
