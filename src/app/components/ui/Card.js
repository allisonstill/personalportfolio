"use client";
import { motion, useMotionValue, useTransform } from "framer-motion";

export default function Card({
  children,
  className = "",
  with3DEffect = false,
  onMouseEnter,
  onMouseLeave
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

  const baseClasses = "bg-gray-800/70 backdrop-blur-md rounded-lg border border-gray-700 shadow-lg";
  
  if (with3DEffect) {
    return (
      <motion.div
        className={`${baseClasses} ${className}`}
        whileHover={{ 
          scale: 1.03,
          boxShadow: "0 20px 30px rgba(0, 0, 0, 0.2)"
        }}
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          const centerX = rect.left + rect.width / 2;
          const centerY = rect.top + rect.height / 2;
          x.set(e.clientX - centerX);
          y.set(e.clientY - centerY);
        }}
        onMouseLeave={() => {
          x.set(0);
          y.set(0);
          if (onMouseLeave) onMouseLeave();
        }}
        onMouseEnter={onMouseEnter}
        style={{
          perspective: 1000
        }}
      >
        <motion.div
          style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d"
          }}
        >
          <div style={{ transform: "translateZ(20px)" }}>
            {children}
          </div>
        </motion.div>
      </motion.div>
    );
  }
  
  return (
    <motion.div
      className={`${baseClasses} ${className}`}
      whileHover={{ 
        scale: 1.03, 
        y: -5,
        boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.2), 0 4px 6px -2px rgba(0, 0, 0, 0.1)"
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </motion.div>
  );
}