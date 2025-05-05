"use client";
import { useRef } from "react";
import { motion } from "framer-motion";
import { classes } from "../../../data/classesData";
import { skills } from "../../../data/skillsData";
import SectionTitle from "../ui/SectionTitle";
import ProgressBar from "../ui/ProgressBar";
import Card from "../ui/Card";

export default function Classes({ isInView, onMouseEnter, onMouseLeave }) {
  const ref = useRef(null);

  return (
    <section 
      id="classes" 
      ref={ref}
      className="py-24"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>Classes & Skills</SectionTitle>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
          }}
        >
          {classes.map((course, index) => (
            <Card
              key={index}
              className="p-6"
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              <motion.div
                custom={index}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: (i) => ({
                    opacity: 1,
                    y: 0,
                    transition: {
                      delay: i * 0.1,
                      duration: 0.5,
                      ease: [0.43, 0.13, 0.23, 0.96]
                    }
                  })
                }}
              >
                <div className="text-xs font-medium text-blue-400 mb-1">{course.code}</div>
                <h3 className="text-lg font-semibold mb-2 text-gray-100">{course.name}</h3>
                <p className="text-gray-300">{course.description}</p>
              </motion.div>
            </Card>
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <h3 className="text-2xl font-bold mb-6 text-center text-blue-300">Technical Skills</h3>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
            }}
          >
            {skills.map((skill, index) => (
              <ProgressBar
                key={index}
                name={skill.name}
                level={skill.level}
                index={index}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}