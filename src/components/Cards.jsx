import React, { useState, useEffect } from 'react';
import cardPurple from '../assets/images/cardpurple.png';
import cardBlue from '../assets/images/cardblue.png';

const Cards = () => {
  const [showCards, setShowCards] = useState(() => window.innerWidth > 1440);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setShowCards(window.innerWidth > 1440);
    };

    handleResize();
    setIsLoaded(true);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const moveAmount = scrollPosition * 1.2;

  if (!showCards || !isLoaded) return null;

  return (
    <>
      <img 
        src={cardPurple} 
        alt="Purple Card" 
        style={{
          position: 'fixed',
          top: `${170 - moveAmount}px`,
          left: 0,
          zIndex: 9999,
          width: '11%',
          transition: 'top 0.2s ease-out, width 0.3s ease-out',
          opacity: isLoaded ? 1 : 0
        }}
      />
      <img 
        src={cardBlue} 
        alt="Blue Card" 
        style={{
          position: 'fixed',
          top: `${-100 + moveAmount * 1.5}px`,
          right: 0,
          zIndex: 9999,
          width: '11%',
          transition: 'top 0.2s ease-out, width 0.3s ease-out',
          opacity: isLoaded ? 1 : 0
        }}
      />
    </>
  );
};

export default Cards; 