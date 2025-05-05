"use client";
import { motion } from "framer-motion";

export default function Button({ 
  children, 
  variant = "primary", 
  onClick, 
  className = "",
  onMouseEnter,
  onMouseLeave 
}) {
  const baseClasses = "px-6 py-3 rounded-md shadow-lg transition-colors";
  
  const variants = {
    primary: "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white",
    outline: "border border-blue-500 text-blue-400 hover:bg-blue-900/30",
    secondary: "bg-gray-700 hover:bg-gray-600 text-gray-100",
  };

  return (
    <motion.button 
      className={`${baseClasses} ${variants[variant]} ${className}`}
      whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(37, 99, 235, 0.5)" }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <motion.span className="relative z-10">{children}</motion.span>
    </motion.button>
  );
}