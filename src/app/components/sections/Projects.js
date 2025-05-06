"use client";
import { useRef } from "react";
import { motion, useInView, useMotionValue, useTransform } from "framer-motion";
import Image from "next/image";
import { projects } from "@/app/data/projectsData";
import SectionTitle from "../ui/SectionTitle";

export default function Projects({ onMouseEnter, onMouseLeave }) {
  const ref = useRef(null);

  return (
    <section 
      id="projects" 
      ref={ref}
      className="py-24"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>My Projects</SectionTitle>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const x = useMotionValue(0);
            const y = useMotionValue(0);
            const rotateX = useTransform(y, [-100, 100], [10, -10]);
            const rotateY = useTransform(x, [-100, 100], [-10, 10]);
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                onMouseEnter={onMouseEnter}
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const centerX = rect.left + rect.width / 2;
                  const centerY = rect.top + rect.height / 2;
                  x.set(e.clientX - centerX);
                  y.set(e.clientY - centerY);
                }}
                onMouseLeave={() => {
                  x.set(0);
                  y.set(0); 
                  onMouseLeave && onMouseLeave();
                }}
                style={{
                  perspective: 1000
                }}
              >
                <motion.div
                  className="h-full rounded-lg overflow-hidden bg-gray-800 border border-gray-700 shadow-xl"
                  style={{
                    rotateX,
                    rotateY,
                    transformStyle: "preserve-3d"
                  }}
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 30px rgba(0, 0, 0, 0.2)" }}
                  transition={{ 
                    scale: { duration: 0.2 }, 
                    boxShadow: { duration: 0.2 }
                  }}
                >
                  <div style={{ transform: "translateZ(20px)" }}>
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <Image 
                        src={project.image} 
                        alt={project.title} 
                        width={500} 
                        height={300} 
                        className="rounded-t-lg object-cover w-full aspect-video"
                      />
                    </a>
                    <div className="p-6 flex flex-col justify-between h-full">
                      <h3 className="text-xl font-semibold mb-2 text-blue-300">{project.title}</h3>
                      {project.miniProjects ? (
                        <div className="text-gray-300 mb-4 min-h-[5rem]" >
                          <p>{project.description}</p>
                          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {project.miniProjects.map((mini, i) => (
                              <motion.a
                                key={i}
                                href={mini.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block p-4 bg-gray-900/70 border border-blue-700 rounded-lg hover:bg-gray-800 transition-colors shadow-md"
                                whileHover={{ scale: 1.03 }}
                              >
                                <h4 className="text-lg font-semibold text-blue-300 mb-1">{mini.name}</h4>
                                {mini.description && (
                                  <p className="text-sm text-gray-400">{mini.description}</p>
                                )}
                              </motion.a>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <p className="text-gray-300 mb-4">{project.description}</p>
                      )}

                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech, i) => (
                          <motion.span 
                            key={i} 
                            className="px-3 py-1 bg-blue-900/50 text-blue-300 rounded-full text-sm border border-blue-700"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 + (i * 0.1) }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                      <motion.a 
                        href={project.link} 
                        className="block mt-4 px-4 py-2 text-center text-blue-400 bg-blue-900/30 border border-blue-700 rounded-md hover:text-blue-300 hover:bg-blue-800 transition-colors"
                        whileHover={{ scale: 1.05 }}
                      >
                        View Project →
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}