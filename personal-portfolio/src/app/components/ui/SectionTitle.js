"use client";
import { motion } from "framer-motion";
import { textReveal } from "../animations/AnimationUtils";

export default function SectionTitle({ children, className = "" }) {
  return (
    <motion.h2 
      className={`text-3xl font-bold text-center text-blue-300 mb-16 ${className}`}
      variants={textReveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {children}
    </motion.h2>
  );
}