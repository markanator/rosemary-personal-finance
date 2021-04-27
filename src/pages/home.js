import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import HomeFeatures from '../components/common/homepage_contents/home-features';
import HomeHero from '../components/common/homepage_contents/home-hero';
import TeamSection from '../components/common/homepage_contents/team_section';
import Layout from '../components/common/layout/layout';
import useAppContext from '../hooks/AppContext';

export default function Home() {
  const router = useHistory();
  const { isSignedIn, user } = useAppContext();

  // check to see if the user is logged in
  useEffect(() => {
    if (user && isSignedIn) {
      router.push('/dashboard');
    }
  }, [isSignedIn, user]);

  return (
    <Layout>
      <HomeHero />
      <HomeFeatures />
      <TeamSection />
    </Layout>
  );
}
