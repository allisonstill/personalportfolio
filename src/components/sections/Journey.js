"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { journeyItems } from "../../../data/journeyData";
import SectionTitle from "../ui/SectionTitle";

export default function Journey({ isInView, onMouseEnter, onMouseLeave }) {
  const ref = useRef(null);

  return (
    <section 
      id="journey" 
      ref={ref}
      className="py-28 bg-gradient-to-b from-gray-900 to-gray-950 text-gray-100"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>My Journey</SectionTitle>
        
        <div 
          className="relative pl-8 sm:pl-12 before:absolute before:top-0 before:left-4 sm:before:left-5 before:h-full before:w-1 before:bg-gradient-to-b before:from-indigo-500 before:to-blue-600"
        >
          {journeyItems.map((item, index) => {
            const itemRef = useRef(null);
            const isItemInView = useInView(itemRef, { once: true, margin: "-50px" });
            
            return (
              <motion.div
                key={index}
                ref={itemRef}
                className="relative mb-12 group"
                initial={{ opacity: 0, x: -30 }}
                animate={isItemInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 100,
                  damping: 20
                }}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
              >
                {/* Dot */}
                <div className="absolute left-[-6px] top-2 sm:left-[-8px]">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-indigo-500 to-blue-600 text-white flex items-center justify-center shadow-lg border-2 border-white">
                    {item.icon}
                  </div>
                </div>

                {/* Card */}
                <motion.div 
                  className="ml-8 sm:ml-12 p-6 bg-gray-800/80 backdrop-blur-md rounded-lg border border-gray-700 shadow-xl transition-transform duration-300 group-hover:scale-[1.02] group-hover:shadow-blue-500/30"
                  whileHover={{
                    scale: 1.02,
                    rotateY: 5,
                    rotateX: 2,
                    transition: { duration: 0.4, ease: "easeOut" }
                  }}
                >
                  <h3 className="text-xl font-semibold text-blue-400">{item.title}</h3>
                  <p className="text-sm text-gray-400">{item.year}</p>
                  <p className="text-gray-300 mt-2 leading-relaxed">{item.description}</p>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}