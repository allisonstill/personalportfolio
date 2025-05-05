"use client";
import { motion, useMotionValue } from "framer-motion";
import { useEffect } from "react";

export default function CustomCursor({ scale = useMotionValue(1) }) {
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [cursorX, cursorY]);

  return (
    <motion.div 
      className="fixed w-12 h-12 rounded-full border-2 border-blue-400 pointer-events-none z-50 mix-blend-difference"
      style={{ 
        x: cursorX,
        y: cursorY,
        scale: scale,
        translateX: "-50%",
        translateY: "-50%"
      }}
      transition={{ type: "spring", damping: 20, stiffness: 300 }}
    />
  );
}