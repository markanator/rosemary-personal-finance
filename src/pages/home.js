import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import HomeHero from '../features/homepage/home-hero';
import HomeFeatures from '../features/homepage/home-features';
import TeamSection from '../features/homepage/team_section';
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
