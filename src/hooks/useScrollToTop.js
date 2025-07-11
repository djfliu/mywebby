import { useEffect, useState } from 'react';

/**
 * Custom hook that adds scroll-to-top functionality
 * @param {number} threshold - Number of pixels scrolled before button appears
 * @returns {boolean} - Whether the scroll button should be visible
 */
const useScrollToTop = (threshold = 200) => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > threshold) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Initial check in case page is already scrolled
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [threshold]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return { showScrollButton, scrollToTop };
};

export default useScrollToTop;
