import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

const textFlicker = keyframes`
  0% { opacity: 0.1; }
  2% { opacity: 1; }
  8% { opacity: 0.1; }
  9% { opacity: 1; }
  12% { opacity: 0.1; }
  20% { opacity: 1; }
  25% { opacity: 0.3; }
  30% { opacity: 1; }
  70% { opacity: 0.7; }
  72% { opacity: 0.2; }
  77% { opacity: 0.9; }
  100% { opacity: 0.9; }
`;

export const HeroContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100vh;
`;

export const HeroTitle = styled(motion.h1)`
  font-size: 7rem;
  margin-bottom: 1rem;
  animation: ${textFlicker} 3s linear infinite;

  @media (max-width: 768px) {
    font-size: 4.5rem;
  }
`;

export const HeroSubtitle = styled(motion.p)`
  font-size: 2.2rem;
  color: var(--color-dark-text);
  max-width: 600px;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

export const ScrollButton = styled(motion.button)`
  font-family: var(--font-heading);
  font-size: 1.8rem;
  color: var(--color-accent-neon);
  background: transparent;
  border: 2px solid var(--color-accent-neon);
  padding: 1rem 2rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 0 10px rgba(0, 247, 255, 0.5);

  &:hover {
    background: rgba(0, 247, 255, 0.1);
    box-shadow: 0 0 20px rgba(0, 247, 255, 0.8);
  }
`;