import React from 'react';
import Layout from '../components/common/layout/layout';
import HomeHero from '../features/homepage/home-hero';
import HomeFeatures from '../features/homepage/home-features';
import TeamSection from '../features/homepage/team_section';

export default function Home() {
  return (
    <Layout>
      <HomeHero />
      <HomeFeatures />
      <TeamSection />
    </Layout>
  );
}
