"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ParallaxBackground({
  children,
  intensity = 0.2,
  className = "",
}) {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, -1000 * 0.1 * intensity]);

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      <motion.div style={{ y }} className="relative z-10">
        {children}
      </motion.div>
    </div>
  );
}
