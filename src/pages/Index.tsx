
import { useEffect } from 'react';
import Hero from '../components/Hero';
import FeaturedEpisodes from '../components/FeaturedEpisodes';
import AboutHost from '../components/AboutHost';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import PageTransition from '../components/PageTransition';

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Hero />
          <FeaturedEpisodes />
          <AboutHost />
          <Newsletter />
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default Index;
