import styled from 'styled-components';
import { motion } from 'framer-motion';

export const SectionTitle = styled.h2`
  font-size: 4rem;
  text-align: center;
  margin-bottom: 1rem;
   &::before {
    content: '// ';
  }
`;

export const ContactContainer = styled(motion.div)`
    text-align: center;
`;

export const ContactText = styled.p`
    color: var(--color-dark-text);
    max-width: 500px;
    margin: 0 auto 3rem auto;
`;

export const EmailLink = styled.a`
  display: inline-block;
  font-family: var(--font-heading);
  font-size: 2.2rem;
  padding: 1.2rem 2.4rem;
  border: 2px solid var(--color-accent-neon);
  border-radius: 5px;
  color: var(--color-accent-neon);
  text-decoration: none;
  background: transparent;
  transition: all 0.3s ease;
  box-shadow: 0 0 10px rgba(0, 247, 255, 0.5), inset 0 0 5px rgba(0, 247, 255, 0.3);

  &:hover {
    background: rgba(0, 247, 255, 0.1);
    box-shadow: 0 0 20px rgba(0, 247, 255, 0.8), inset 0 0 10px rgba(0, 247, 255, 0.5);
    transform: translateY(-5px);
  }
`;