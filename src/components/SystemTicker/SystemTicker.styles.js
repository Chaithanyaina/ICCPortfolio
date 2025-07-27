import styled, { keyframes } from 'styled-components';

const blink = keyframes`
  50% { opacity: 0; }
`;

export const TickerContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background: rgba(10, 10, 30, 0.8);
  backdrop-filter: blur(5px);
  border-top: 1px solid rgba(0, 247, 255, 0.2);
  padding: 0.5rem 2rem;
  z-index: 1001; /* Above navbar */
`;

export const TickerText = styled.p`
  font-family: var(--font-body);
  font-size: 1.4rem;
  color: var(--color-accent-neon);
  white-space: nowrap;
  overflow: hidden;

  .cursor {
    animation: ${blink} 1s step-end infinite;
  }
`;