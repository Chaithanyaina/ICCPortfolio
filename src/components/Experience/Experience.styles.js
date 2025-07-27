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

export const Timeline = styled.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;

  &::after {
    content: '';
    position: absolute;
    width: 2px;
    background-color: rgba(0, 247, 255, 0.3);
    top: 0;
    bottom: 0;
    left: 50%;
    margin-left: -1px;
  }
`;

export const TimelineItem = styled(motion.div)`
  padding: 10px 40px;
  position: relative;
  width: 50%;

  &:nth-child(odd) {
    left: 0;
  }

  &:nth-child(even) {
    left: 50%;
  }

  &::after {
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    right: -10px;
    background-color: var(--color-primary-dark);
    border: 3px solid var(--color-accent-neon);
    top: 25px;
    border-radius: 50%;
    z-index: 1;
    box-shadow: 0 0 10px var(--color-accent-neon);
  }

  &:nth-child(even)::after {
    left: -10px;
  }
`;

export const TimelineContent = styled.div`
  padding: 20px 30px;
  background: rgba(26, 26, 58, 0.5);
  border: 1px solid rgba(0, 247, 255, 0.2);
  border-radius: 6px;
  position: relative;
`;

export const JobTitle = styled.h3`
  font-size: 2rem;
`;

export const Company = styled.h4`
    font-family: var(--font-body);
    font-weight: 400;
    color: var(--color-light-text);
    font-size: 1.6rem;
    margin-bottom: 0.5rem;
`;

export const Date = styled.span`
  color: var(--color-accent-neon);
  font-size: 1.4rem;
  display: block;
  margin-bottom: 1rem;
`;