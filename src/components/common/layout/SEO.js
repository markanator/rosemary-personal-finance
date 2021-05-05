import React from 'react';
import { Helmet } from 'react-helmet';

const defaultTitle = 'Free Checkbook balancer & Planner';
const defaultDescription =
  'Take charge of your finances with Rosemary’s online checkbook balancer. Our spending tracker helps you understand your finances for a better financial future.';

export default function SEOComponent({
  title = defaultTitle,
  description = defaultDescription,
}) {
  return (
    <Helmet>
      <html lang="en" amp />
      {/* <base target="_blank" href="https://rosemary-pf.netlify.app/" /> */}
      <title>{title} | Rosemary Personal Finance</title>
      <meta name="description" content={description} />
    </Helmet>
  );
}
