"use client";
import { motion } from "framer-motion";

export default function NavLink({ 
  href, 
  children, 
  isActive, 
  onMouseEnter, 
  onMouseLeave 
}) {
  return (
    <motion.a
      href={href}
      className={`px-3 py-2 rounded-md transition-colors relative group ${
        isActive ? "text-blue-400" : "text-gray-300 hover:text-blue-400"
      }`}
      whileHover={{ scale: 1.05 }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <span>{children}</span>
      <motion.span 
        className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500/50 transform origin-left"
        initial={{ scaleX: isActive ? 1 : 0 }}
        animate={{ scaleX: isActive ? 1 : 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.a>
  );
}