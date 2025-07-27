import React, { useState, useEffect } from 'react';
import { TickerContainer, TickerText } from './SystemTicker.styles';

const messages = [
  'Initializing neural network...',
  'Calibrating quantum flux capacitor...',
  'Locating nearest coffee source...',
  'Compiling witty remarks...',
  'Reticulating splines...',
  'Decrypting alien transmissions...',
  'All systems nominal.',
];

const SystemTicker = () => {
  const [currentMessage, setCurrentMessage] = useState('');
  const [messageIndex, setMessageIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const type = () => {
      if (charIndex < messages[messageIndex].length) {
        setCurrentMessage(prev => prev + messages[messageIndex].charAt(charIndex));
        setCharIndex(prev => prev + 1);
      } else {
        // Pause at the end of the message, then switch to the next one
        setTimeout(() => {
          setCurrentMessage('');
          setCharIndex(0);
          setMessageIndex(prev => (prev + 1) % messages.length);
        }, 2000); // 2-second pause
      }
    };

    const typingInterval = setInterval(type, 50); // Typing speed

    return () => clearInterval(typingInterval);
  }, [charIndex, messageIndex]);

  return (
    <TickerContainer>
      <TickerText>
        {'>'} {currentMessage}
        <span className="cursor">|</span>
      </TickerText>
    </TickerContainer>
  );
};

export default SystemTicker;