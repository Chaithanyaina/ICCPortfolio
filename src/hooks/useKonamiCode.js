import { useState, useEffect } from 'react';

const konamiCode = [
  'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
  'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
  'b', 'a'
];

export const useKonamiCode = () => {
  const [index, setIndex] = useState(0);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const onKeyDown = (e) => {
      const key = e.key.toLowerCase();
      if (key === konamiCode[index].toLowerCase()) {
        setIndex(prevIndex => prevIndex + 1);
      } else {
        setIndex(0); // Reset on wrong key
      }
    };

    if (index === konamiCode.length) {
      setSuccess(true);
    }

    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [index]);

  return success;
};