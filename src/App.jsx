import React from 'react';
import styled from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import SystemTicker from './components/SystemTicker/SystemTicker'; // Import it

// Import New Components
import ParticleBackground from './components/ParticleBackground';
import Cursor from './components/Cursor';

// Import Sections
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
import Education from './components/Education/Education';
import Contact from './components/Contact/Contact';
import HackerMode from './components/HackerMode/HackerMode'; // Easter Egg

// Import Custom Hook
import { useKonamiCode } from './hooks/useKonamiCode'; // Easter Egg Hook
const AppContainer = styled.div`
  position: relative;
  z-index: 1;
`;

function App() {
  const isHackerMode = useKonamiCode(); // Use the hook

  return (
    <>
      <GlobalStyles />
      <ParticleBackground />
      <Cursor />
      {isHackerMode && <HackerMode />} {/* Conditionally render it */}
      <AppContainer>
        <Navbar />
        <main>
          <Hero />
          <Projects />
          <Skills />
          <Experience />
          <Education />
          <Contact />
        </main>
        <SystemTicker />
      </AppContainer>
    </>
  );
}

export default App;