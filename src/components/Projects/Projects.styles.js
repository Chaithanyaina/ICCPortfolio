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

export const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 3rem;
`;

export const ProjectCard = styled(motion.div)`
  background: rgba(26, 26, 58, 0.5);
  border: 1px solid rgba(0, 247, 255, 0.2);
  border-radius: 10px;
  overflow: hidden;
  backdrop-filter: blur(5px);
  transform-style: preserve-3d;
  transform: perspective(1000px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
`;

export const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  opacity: 0.7;
  transition: opacity 0.3s ease;
  ${ProjectCard}:hover & {
    opacity: 1;
  }
`;

export const ProjectInfo = styled.div`
  padding: 2rem;
`;

export const ProjectTitle = styled.h3`
  font-size: 2.4rem;
  margin-bottom: 1rem;
`;

export const ProjectDescription = styled.p`
  font-size: 1.5rem;
  color: var(--color-dark-text);
  margin-bottom: 1.5rem;
`;

export const ProjectLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  a {
    color: var(--color-accent-neon);
    font-size: 1.6rem;
    text-decoration: none;
    transition: text-shadow 0.3s ease;
    &:hover {
      text-shadow: 0 0 5px var(--color-accent-neon);
    }
  }
`;