"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function ProgressBar({ 
  name, 
  level, 
  index = 0, 
  onMouseEnter, 
  onMouseLeave 
}) {
  const [width, setWidth] = useState(0);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setWidth(level);
    }, index * 100);
    
    return () => clearTimeout(timer);
  }, [level, index]);

  return (
    <motion.div 
      className="mb-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: index * 0.1, duration: 0.3 }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="flex justify-between mb-1">
        <span className="font-medium text-gray-100">{name}</span>
        <motion.span 
          className="text-blue-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: index * 0.1 + 0.5 }}
        >
          {level}%
        </motion.span>
      </div>
      <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
        <motion.div 
          className="h-full bg-gradient-to-r from-blue-500 to-indigo-600"
          style={{ width: `${width}%` }}  
          initial={{ width: '0%' }}
          animate={{ width: `${level}%` }} 
          transition={{ 
            duration: 1.5, 
            ease: "easeOut",
            delay: index * 0.1
          }}
        />
      </div>
    </motion.div>
  );
}