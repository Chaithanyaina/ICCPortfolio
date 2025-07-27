import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { HeroContainer, HeroTitle, HeroSubtitle, ScrollButton } from './Hero.styles';

const Hero = () => {
  return (
    <HeroContainer id="hero">
      <HeroTitle
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        // Chaithanya Inaganti
      </HeroTitle>
      <HeroSubtitle
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        Full Stack Developer - AI/ML Engineer
      </HeroSubtitle>
      <ScrollLink to="projects" smooth={true} offset={-70} duration={500}>
        <ScrollButton
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          INITIATE SCAN
        </ScrollButton>
      </ScrollLink>
    </HeroContainer>
  );
};

export default Hero;