import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <div >
      <Hero />
      <About />
      <TechStack/>
      <Projects />
      <Footer />
    </div>
  );
};

export default App;