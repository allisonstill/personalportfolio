"use client"

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function AnimatedText({ 
  text, 
  type = "heading", 
  className = "",
  color = "text-indigo-600 dark:text-indigo-400",
  delay = 0,
  duration = 0.05,
  animationType = "wave"
}) {
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <div className={`${type === "heading" ? "text-4xl font-bold" : "text-lg"} ${className} ${color}`}>
        {text}
      </div>
    );
  }

  const letters = text.split("");

  const animations = {
    wave: {
      hidden: { y: 0, opacity: 0 },
      visible: (i) => ({
        y: 0,
        opacity: 1,
        transition: {
          delay: i * duration + delay,
          duration: 0.4,
          ease: [0.2, 0.65, 0.3, 0.9],
        },
      }),
    },
    bounce: {
      hidden: { y: 20, opacity: 0 },
      visible: (i) => ({
        y: 0,
        opacity: 1,
        transition: {
          delay: i * duration + delay,
          type: "spring",
          stiffness: 300,
          damping: 10,
        }
      }),
    },
    reveal: {
      hidden: { y: 0, opacity: 0 },
      visible: (i) => ({
        y: 0, 
        opacity: 1,
        transition: {
          delay: delay + 0.2,
          duration: 0.6,
          ease: [0.2, 0.65, 0.3, 0.9],
        }
      })
    },
    typewriter: {
      hidden: { opacity: 0, display: "none" },
      visible: (i) => ({
        opacity: 1,
        display: "inline-block",
        transition: {
          delay: i * 0.1 + delay,
          duration: 0,
        }
      })
    }
  };

  if (animationType === "typewriter") {
    return (
      <div className={`${type === "heading" ? "text-4xl font-bold" : "text-lg"} ${className} ${color}`}>
        <motion.span 
          className="inline-block"
          initial="hidden"
          animate="visible"
          variants={animations.typewriter}
          custom={0}
        >
          {letters.map((letter, index) => (
            <motion.span
              key={index}
              variants={animations.typewriter}
              custom={index}
              className="inline-block"
            >
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
        </motion.span>
        <motion.span
          className="inline-block w-[2px] h-[1em] bg-indigo-600 dark:bg-indigo-400 ml-1 align-middle"
          animate={{ opacity: [1, 0, 1] }}
          transition={{ repeat: Infinity, duration: 0.8 }}
        />
      </div>
    );
  }

  return (
    <motion.div
      className={`${type === "heading" ? "text-4xl font-bold" : "text-lg"} ${className} ${color}`}
      initial="hidden"
      animate="visible"
      variants={animations.reveal}
    >
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          variants={animations[animationType]}
          custom={index}
          className="inline-block"
          style={{ 
            display: "inline-block",
            whiteSpace: "pre",
          }}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.div>
  );
}