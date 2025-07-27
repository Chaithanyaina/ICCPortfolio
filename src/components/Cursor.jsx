import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const CursorDot = styled.div.attrs(props => ({
    style: {
      left: `${props.x}px`,
      top: `${props.y}px`,
      width: props.isHovering ? '40px' : '20px',
      height: props.isHovering ? '40px' : '20px'
    },
  }))`
    position: fixed;
    background-color: var(--color-accent-neon);
    border-radius: 50%;
    pointer-events: none;
    transform: translate(-50%, -50%);
    z-index: 9999;
    mix-blend-mode: difference;
    transition: width 0.3s ease-in-out, height 0.3s ease-in-out;
`;

const Cursor = () => {
    const [position, setPosition] = useState({ x: -100, y: -100 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e) => {
            if (e.target.closest('a, button, input')) {
                setIsHovering(true);
            }
        };

        const handleMouseOut = (e) => {
            if (e.target.closest('a, button, input')) {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        document.body.addEventListener('mouseover', handleMouseOver);
        document.body.addEventListener('mouseout', handleMouseOut);
        
        document.body.style.cursor = 'none';

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            document.body.removeEventListener('mouseover', handleMouseOver);
            document.body.removeEventListener('mouseout', handleMouseOut);
            document.body.style.cursor = 'auto';
        };
    }, []);

    return <CursorDot x={position.x} y={position.y} isHovering={isHovering} />;
};

export default Cursor;