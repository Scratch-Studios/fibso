import React, { useEffect } from 'react';

const ScrollToTop = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  return null; // No JSX to render
};

export default ScrollToTop;