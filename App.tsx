
import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { WhyItMatters } from './components/WhyItMatters';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen relative overflow-x-hidden">
      {/* Background Layer */}
      <div className="fixed inset-0 meridian-grid pointer-events-none" />
      
      {/* Content */}
      <Header />
      <main>
        <Hero />
        <Services />
        <WhyItMatters />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default App;
