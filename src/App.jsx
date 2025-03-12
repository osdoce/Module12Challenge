import React, { useState } from 'react';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('about');

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="text-white">
      <Header activeSection={activeSection} onSectionChange={handleSectionChange} />
      <main>
        {activeSection === 'about' && <AboutMe />}
        {activeSection === 'portfolio' && <Portfolio />}
        {activeSection === 'contact' && <Contact />}
        {activeSection === 'resume' && <Resume />}
      </main>
      <Footer />
    </div>
  );
}

export default App;