import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustIndicators from './components/TrustIndicators';
import Collections from './components/Collections';
import FeaturedProducts from './components/FeaturedProducts';
import Designers from './components/Designers';
import Sustainability from './components/Sustainability';
import Testimonials from './components/Testimonials';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header isScrolled={isScrolled} />
      <Hero />
      <TrustIndicators />
      <Collections />
      <FeaturedProducts />
      <Designers />
      <Sustainability />
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;