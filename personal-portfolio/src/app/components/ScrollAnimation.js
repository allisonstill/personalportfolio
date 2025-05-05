"use client"

import { useEffect } from 'react';

export default function ScrollAnimation() {
  useEffect(() => {

    const isInViewport = (element) => {
      const rect = element.getBoundingClientRect();
      return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
        rect.bottom >= 0 &&
        rect.left <= (window.innerWidth || document.documentElement.clientWidth) &&
        rect.right >= 0
      );
    };

    const handleScroll = () => {
      const revealElements = document.querySelectorAll(
        '.reveal, .reveal-left, .reveal-right, .reveal-scale, .stagger-children'
      );

      revealElements.forEach((element) => {
        if (isInViewport(element)) {
          element.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return null;
}