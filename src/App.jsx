import React from 'react';
import { ReactLenis } from 'lenis/react'; // Lenis for smooth scroll
import './App.css';

// Component Imports
import Navbar from './component/Navbar';
import Hero from './component/Hero';
import AboutSection from './component/AboutSection';
import ServicesGrid from './component/ServicesGrid';
import PhilosophySection from './component/PhilosophySection';
import ProcessSection from './component/ProcessSection';
import ContactStage from './component/ContactStage';
import ContactSection from './component/ContactSection';
import Footer from './component/Footer';

function App() {
  // Lenis options for that signature Apple "heavy" scroll feel
  const lenisOptions = {
    lerp: 0.1,
    duration: 1.5,
    smoothTouch: false, // Set to true if you want smooth scroll on mobile too
    wheelMultiplier: 1,
  };

  return (
    <ReactLenis root options={lenisOptions}>
      <div className="bg-[#fbfbfd]">
        {/* The Navbar is fixed, so it stays on top of all sections */}
        <Navbar />

        <main>
          <Hero />
          <AboutSection />
          <ServicesGrid />
          <PhilosophySection />
          <ProcessSection />
          
          {/* Contact Flow */}
          <ContactStage />
          <ContactSection />
        </main>

        <Footer />
      </div>
    </ReactLenis>
  );
}

export default App;