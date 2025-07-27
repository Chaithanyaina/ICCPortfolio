import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Nav = styled(motion.nav)`
  position: fixed;
  top: 0;
  width: 100%;
  padding: 1.5rem 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(10, 10, 30, 0.7);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(0, 247, 255, 0.2);
  z-index: 1000;

  @media (max-width: 768px) {
    padding: 1.5rem 2rem;
  }
`;

export const NavLogo = styled.a`
  font-family: var(--font-heading);
  font-size: 2.4rem;
  color: var(--color-accent-neon);
  text-decoration: none;
  font-weight: 700;
  text-shadow: 0 0 5px var(--color-accent-neon);
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  gap: 3rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li``;

export const NavLink = styled.span`
  color: var(--color-light-text);
  text-decoration: none;
  font-size: 1.6rem;
  font-family: var(--font-body);
  position: relative;
  cursor: pointer;
  transition: all 0.3s ease;

  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: var(--color-accent-neon);
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.4s ease-out;
  }

  &:hover {
    color: var(--color-accent-neon);
    text-shadow: 0 0 3px var(--color-accent-neon);
  }

  ${NavItem}:hover &::after {
    transform: scaleX(1);
    transform-origin: left;
  }
`;

export const ResumeButton = styled.a`
  padding: 0.8rem 1.6rem;
  border: 1px solid var(--color-accent-neon);
  border-radius: 5px;
  color: var(--color-accent-neon);
  background: transparent;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 0 5px rgba(0, 247, 255, 0.5), inset 0 0 5px rgba(0, 247, 255, 0.3);

  &:hover {
    background: rgba(0, 247, 255, 0.1);
    box-shadow: 0 0 15px rgba(0, 247, 255, 0.8), inset 0 0 10px rgba(0, 247, 255, 0.5);
  }
`;