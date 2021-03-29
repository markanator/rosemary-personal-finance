import React from 'react';
import HomeFeatures from '../components/common/homepage_contents/home-features';
import TeamSection from '../components/common/homepage_contents/team_section';
import Layout from '../components/common/layout/layout';

export default function Home() {
  return (
    <Layout>
      Homepage
      <HomeFeatures />
      <TeamSection />
    </Layout>
  );
}
