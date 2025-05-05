"use client";
import { motion } from "framer-motion";

export default function Footer({ onMouseEnter, onMouseLeave }) {
  return (
    <motion.footer 
      className="py-12 bg-gray-900 border-t border-gray-800 relative z-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="text-center mb-6"
          >
            <motion.div 
              className="text-2xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500"
              whileHover={{ scale: 1.05 }}
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              Allison Still
            </motion.div>
            <div className="text-sm text-gray-400">Computer Science Student</div>
          </motion.div>
          
          {/* Navigation */}
          <motion.div 
            className="flex flex-wrap justify-center gap-6 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            {["About", "Journey", "Projects", "Classes", "Contact"].map((item, index) => (
              <motion.a
                key={index}
                href={`#${item.toLowerCase()}`}
                className="text-gray-400 hover:text-blue-400 transition-colors"
                whileHover={{ scale: 1.1, y: -2 }}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
              >
                {item}
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.footer>
  );
}