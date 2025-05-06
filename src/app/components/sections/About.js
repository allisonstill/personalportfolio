"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Terminal from "../Terminal";
import AnimatedText from "../animations/AnimatedText";
import Button from "../ui/Button";
import { techStack } from "@/app/data/techStackData";
import { slideUp, staggerContainer, floatAnimation } from "../animations/AnimationUtils";

export default function About({ isInView, onMouseEnter, onMouseLeave }) {
  const ref = useRef(null);
  const inView = useInView(ref, { margin: "-100px 0px" }) || isInView;

  return (
    <section 
      id="about" 
      ref={ref}
      className="py-24"
    >
      <motion.div 
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={staggerContainer}
      >
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            className="flex-1"
            variants={staggerContainer}
          >
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-6"
              variants={slideUp}
            >
              <motion.span className="inline-block">Hi, I'm </motion.span>
              <motion.span 
                className="text-blue-400 relative inline-block ml-2"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1,
                  transition: { delay: 0.3, duration: 0.5, ease: "backOut" }
                }}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
              >
                Allison Still
                <motion.span 
                  className="absolute -bottom-2 left-0 w-full h-1 bg-blue-400/30"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                />
              </motion.span>
            </motion.h1>
            <AnimatedText 
              text="Computer Science Student"
              type="heading"
              className="mb-6"
              animationType="wave"
              color="text-blue-300"
            />
            <motion.p 
              className="text-lg mb-8 leading-relaxed text-gray-300"
              variants={slideUp}
            >
              As a third-year University of Texas student pursuing a Bachelor of Science in Computer Science degree with minors in Business and Educational Psychology, I am eager to apply my technical knowledge and problem-solving skills to a new position. I am highly motivated and enthusiastic about contributing to a team and making a meaningful impact in the industry.
            </motion.p>
            <div className="mt-8 max-w-xl">
              <Terminal />
            </div>
            <motion.div 
              className="flex flex-wrap gap-4 mt-8"
              variants={slideUp}
            >
              <Button 
                variant="primary"
                onClick={() => {
                  document.getElementById('projects')?.scrollIntoView({behavior: 'smooth'})
                }}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
              >
                View My Projects
              </Button>
              <Button 
                variant="outline"
                onClick={() => {
                  document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})
                }}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
              >
                Contact Me
              </Button>
            </motion.div>
          </motion.div>
          <motion.div 
            className="flex-1 flex justify-center"
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ 
              duration: 0.5, 
              delay: 0.2,
              type: "spring",
              stiffness: 100
            }}
          >
            <motion.div 
              className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-blue-400 shadow-xl"
              whileHover={{ scale: 1.05, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
              animate={floatAnimation.animate}
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >

              <div className="w-full h-full bg-gray-800 flex items-center justify-center text-6xl ">
                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 0.7 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  <Image
                    src="/recent-allison-still-headshot.JPG"
                    alt="Profile Image"
                    width={375}
                    height={620}
                    className="rounded-full brightness-80"
                  />
                </motion.div>
              </div>
              
              <motion.div 
                className="absolute -top-4 -right-4 bg-gray-800 text-blue-400 rounded-full w-12 h-12 flex items-center justify-center shadow-lg text-xl border border-blue-400"
                animate={{ 
                  y: [0, -15, 0],
                  rotate: [0, 15, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 3,
                  ease: "easeInOut", 
                  times: [0, 0.5, 1]
                }}
              >
              
                
              </motion.div>
              <motion.div 
                className="absolute -bottom-4 -left-4 bg-gray-800 text-blue-400 rounded-full w-10 h-10 flex items-center justify-center shadow-lg text-lg border border-blue-400"
                animate={{ 
                  y: [0, 10, 0],
                  rotate: [0, -10, 0]
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 4,
                  ease: "easeInOut",
                  times: [0, 0.5, 1] 
                }}
              >
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
        
        <motion.div 
          className="mt-20 p-6 bg-gray-800/70 backdrop-blur-md rounded-xl shadow-xl border border-gray-700"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <h3 className="text-xl font-semibold mb-4 text-center text-blue-300">My Tech Stack</h3>
          <div className="flex flex-wrap justify-center gap-8">
            {techStack.map((tech, index) => (
              <motion.div 
                key={tech.name}
                className="flex flex-col items-center"
                whileHover={{ y: -5, scale: 1.1 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + (index * 0.1) }}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
              >
                <span className="text-3xl mb-2">{tech.icon}</span>
                <span className="text-sm text-gray-300">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}