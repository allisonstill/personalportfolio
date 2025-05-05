"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ConstellationBackground() {
  const [stars, setStars] = useState([]);
  const pathRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  useEffect(() => {
    const generatedStars = Array.from({ length: 30 }).map(() => ({
      x: Math.random() * 1440,
      y: Math.random() * 3000,
      delay: Math.random() * 5,
    }));
    setStars(generatedStars);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none overflow-hidden">
      <svg
        viewBox="0 0 1440 3000"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full absolute"
        preserveAspectRatio="none"
      >
        <motion.path
          ref={pathRef}
          d="M 100,100 Q 400,300 300,600 T 600,1000 T 900,1400 T 1200,1800"
          stroke="#60a5fa"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          style={{ pathLength }}
        />

        {stars.map((star, i) => (
          <circle
            key={i}
            cx={star.x}
            cy={star.y}
            r="1.5"
            fill="#e0f2fe"
            className="twinkle"
            style={{ animationDelay: `${star.delay}s` }}
          />
        ))}
      </svg>
    </div>
  );
}