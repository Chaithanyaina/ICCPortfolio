import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --color-primary-dark: #0a0a1a;
    --color-secondary-dark: #1a1a3a;
    --color-accent-neon: #00f7ff;
    --color-light-text: #e0e0e0;
    --color-dark-text: #a0a0c0;
    --font-heading: 'Orbitron', sans-serif;
    --font-body: 'Roboto Mono', monospace;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 62.5%; // 1rem = 10px
    scroll-behavior: smooth;
  }

  body {
    background: var(--color-primary-dark);
    color: var(--color-light-text);
    font-family: var(--font-body);
    font-weight: 300;
    line-height: 1.6;
    font-size: 1.6rem;
    overflow-x: hidden;
  }

  h1, h2, h3, h4 {
    font-family: var(--font-heading);
    font-weight: 700;
    color: var(--color-accent-neon);
    text-shadow: 0 0 5px var(--color-accent-neon), 0 0 10px rgba(0, 247, 255, 0.5);
  }

  section {
    padding: 10rem 2rem;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;

    @media (max-width: 768px) {
      padding: 8rem 1rem;
      min-height: auto;
    }
  }

  .section-container {
      width: 100%;
      max-width: 1200px;
      margin: 0 auto;
  }
`;

export default GlobalStyles;