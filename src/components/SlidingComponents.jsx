import React from 'react'
import { useEffect, useState } from 'react'
import '/src/styles/slidingComponent.css'
const SlidingComponents = React.forwardRef(({ children }, ref) => {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [])
  useEffect(() => {
    if (scrollY > 200) {
      setIsVisible(true);
    }
  }, [scrollY]);

  return (
    <div className={`slide-in ${isVisible ? 'visible' : ''}`} ref={ref}>
      {children}
    </div>
  );
});

export default SlidingComponents