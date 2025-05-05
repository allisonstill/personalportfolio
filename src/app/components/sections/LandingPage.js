"use client";
import { motion, useTransform, useScroll } from "framer-motion";
import AnimatedText from "../animations/AnimatedText";
import { textReveal } from "../animations/AnimationUtils";

export default function LandingPage({ onMouseEnter, onMouseLeave }) {
  const { scrollYProgress } = useScroll();
  
  return (
    <section 
      className="h-screen flex flex-col items-center justify-center relative overflow-hidden"
      id="landing"
    >
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-purple-900/20"
        style={{ 
          opacity: useTransform(scrollYProgress, [0, 0.2], [0.5, 0]),
          y: useTransform(scrollYProgress, [0, 0.2], [0, 100])
        }}
      />

      <motion.div
        className="absolute top-24 sm:top-18 w-full flex justify-center z-10 opacity-45"
        style={{ pointerEvents: "none" }}
      >
        <motion.img
          src="/branches.gif"
          alt="Animated Tree"
          className="w-30 sm:w-48" // Adjust width
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      <div className="z-10 text-center px-4 relative">
        <motion.h1 
          className="text-7xl sm:text-8xl font-bold mb-6 tracking-tighter"
          variants={textReveal}
          initial="hidden"
          animate="visible"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          <motion.span 
            className="block relative"
            style={{ 
              textShadow: "0 0 4px #60a5fa, 0 0 8px #60a5fa, 0 0 12px #60a5fa"
            }}
          >
            Allison Still
          </motion.span>
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.6, 
            ease: "easeOut",
            delay: 0.8
          }}
        >
          <AnimatedText 
            text="Computer Science Student"
            type="heading"
            className="text-3xl sm:text-4xl mb-8 tracking-wide"
            animationType="typewriter" // Changed to typewriter
            color="text-blue-300"
          />
        </motion.div>
        
        <motion.div 
          className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto my-8 rounded-full"
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: 96, opacity: 1 }}
          transition={{ 
            duration: 1.2, 
            ease: "easeInOut",
            delay: 1.2 
          }}
        />
      </div>

      <motion.a
        href="#about"
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-blue-400 hover:text-blue-300 transition-colors"
        initial={{ opacity: 0, y: 10 }}
        animate={{ 
          opacity: 1, 
          y: [0, 10, 0],
        }}
        transition={{ 
          opacity: { duration: 1, delay: 1.8 },
          y: { 
            duration: 1.5, 
            repeat: Infinity, 
            ease: "easeInOut", 
            delay: 1.8 
          }
        }}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <span className="mb-2 text-lg">Explore</span>
        <svg 
          className="w-6 h-6" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M19 14l-7 7m0 0l-7-7m7 7V3" 
          />
        </svg>
      </motion.a>
    </section>
  );
}