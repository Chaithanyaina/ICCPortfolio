import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Nav, NavLogo, NavMenu, NavItem, NavLink, ResumeButton } from './Navbar.styles';

const Navbar = () => {
  return (
    <Nav initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.5 }}>
      <NavLogo href="/">Portfolio</NavLogo> {/* Your Initials */}
      <NavMenu>
        <NavItem>
          <ScrollLink to="projects" spy={true} smooth={true} offset={-70} duration={500}>
            <NavLink>Projects</NavLink>
          </ScrollLink>
        </NavItem>
        <NavItem>
          <ScrollLink to="skills" spy={true} smooth={true} offset={-70} duration={500}>
            <NavLink>Skills</NavLink>
          </ScrollLink>
        </NavItem>
        <NavItem>
           <ScrollLink to="experience" spy={true} smooth={true} offset={-70} duration={500}>
            <NavLink>Experience</NavLink>
          </ScrollLink>
        </NavItem>
        <NavItem>
           <ScrollLink to="contact" spy={true} smooth={true} offset={-70} duration={500}>
            <NavLink>Contact</NavLink>
          </ScrollLink>
        </NavItem>
      </NavMenu>
      <div style={{ display: 'flex', gap: '10px' }}>

      <ResumeButton href="https://leetcode.com/u/chaithanya_inaganti/" target="_blank" rel="noopener noreferrer">
        Leetcode
      </ResumeButton>
      <ResumeButton href="https://linkedin.com/in/chaithanyainaganti" target="_blank" rel="noopener noreferrer">
        Linkedin
      </ResumeButton>
      <ResumeButton href="https://drive.google.com/file/d/1ayo1IUzsskexHtM4_kJrus5g6SU_W5-4/view?usp=sharing" target="_blank" rel="noopener noreferrer">
        View Resume
      </ResumeButton>
      </div>
    </Nav>
  );
};

export default Navbar;