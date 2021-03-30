import React from 'react';
import HomeFeatures from '../components/common/homepage_contents/home-features';
import HomeHero from '../components/common/homepage_contents/home-hero';
import TeamSection from '../components/common/homepage_contents/team_section';
import Layout from '../components/common/layout/layout';

export default function Home() {
  return (
    <Layout>
      <HomeHero />
      <HomeFeatures />
      <TeamSection />
    </Layout>
  );
}
