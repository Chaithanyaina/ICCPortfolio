import styled from 'styled-components';
import { motion } from 'framer-motion';

export const SectionTitle = styled.h2`
  font-size: 4rem;
  text-align: center;
  margin-bottom: 5rem;
  &::before {
    content: '// ';
  }
`;

export const SkillsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  max-width: 800px;
  margin: 0 auto;
`;

export const SkillCard = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 120px;
  background: rgba(26, 26, 58, 0.5);
  border: 1px solid rgba(0, 247, 255, 0.2);
  border-radius: 10px;
  padding: 1rem;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    background: rgba(0, 247, 255, 0.1);
    box-shadow: 0 0 15px rgba(0, 247, 255, 0.5);
  }

  svg {
    font-size: 4rem;
    color: var(--color-accent-neon);
    margin-bottom: 1rem;
  }

  span {
    font-size: 1.4rem;
    color: var(--color-light-text);
  }
`;