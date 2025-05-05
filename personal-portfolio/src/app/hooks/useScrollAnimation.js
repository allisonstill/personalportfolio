"use client";

import { useEffect, useRef, useState } from 'react';

export function useScrollAnimation({ 
  threshold = 0.1, 
  rootMargin = '0px', 
  triggerOnce = true 
} = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [threshold, rootMargin, triggerOnce]);

  return [ref, isVisible];
}


export function useStaggeredScrollAnimation(count, options = {}) {
  const [visibleItems, setVisibleItems] = useState(Array(count).fill(false));
  const refs = Array(count).fill(0).map(() => useRef(null));

  useEffect(() => {
    const observers = refs.map((ref, index) => {
      const element = ref.current;
      if (!element) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleItems(prev => {
              const newState = [...prev];
              newState[index] = true;
              return newState;
            });
            
            if (options.triggerOnce) {
              observer.unobserve(element);
            }
          } else if (!options.triggerOnce) {
            setVisibleItems(prev => {
              const newState = [...prev];
              newState[index] = false;
              return newState;
            });
          }
        },
        {
          threshold: options.threshold || 0.1,
          rootMargin: options.rootMargin || '0px',
        }
      );

      observer.observe(element);
      return observer;
    });

    return () => {
      observers.forEach((observer, index) => {
        const element = refs[index].current;
        if (observer && element) {
          observer.unobserve(element);
        }
      });
    };
  }, [count, options]);

  return { refs, visibleItems };
}