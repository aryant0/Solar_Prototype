import React from 'react';
import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import Services from '../components/Services';
import Benefits from '../components/Benefits';
import Projects from '../components/Projects';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';

function Home() {
  return (
    <main>
      <Hero />
      <AboutUs />
      <Services />
      <Benefits />
      <Projects />
      <Testimonials />
      <Contact />
    </main>
  );
}

export default Home;