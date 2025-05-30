"use client"

import { useState, useEffect, useRef } from "react";
import { motion, useMotionValue } from "framer-motion";

import LandingPage from "./components/sections/LandingPage";
import About from "./components/sections/About";
import Journey from "./components/sections/Journey";
import Projects from "./components/sections/Projects";
import Classes from "./components/sections/Classes";
import Contact from "./components/sections/Contact";
import Footer from "./components/sections/Footer";
import ParallaxBackground from "./components/backgrounds/ParallaxBackground";
import CustomCursor from "./components/ui/CustomCursor";

export default function Home() {
  const [activeSection, setActiveSection] = useState("landing");
  const [menuOpen, setMenuOpen] = useState(false);
  const cursorScale = useMotionValue(1);

  const landingRef = useRef(null);
  const aboutRef = useRef(null);
  const journeyRef = useRef(null);
  const projectsRef = useRef(null);
  const classesRef = useRef(null);
  const contactRef = useRef(null);

  const navLinks = [
    { id: "about", label: "About" },
    { id: "journey", label: "Journey" },
    { id: "projects", label: "Projects" },
    { id: "classes", label: "Classes" },
    { id: "contact", label: "Contact" }
  ];

  const handleToggle = () => setMenuOpen(!menuOpen);
  
  const handleMouseEnter = () => cursorScale.set(1.5);
  const handleMouseLeave = () => cursorScale.set(1);

  useEffect(() => {
    const sections = [
      { id: "landing", ref: landingRef },
      { id: "about", ref: aboutRef },
      { id: "journey", ref: journeyRef },
      { id: "projects", ref: projectsRef },
      { id: "classes", ref: classesRef },
      { id: "contact", ref: contactRef }
    ];

    const handleScroll = () => {
      const pageYOffset = window.pageYOffset;
      const viewportHeight = window.innerHeight;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (!section.ref.current) continue;
        
        const offsetTop = section.ref.current.offsetTop - 100;
        
        if (pageYOffset >= offsetTop) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); 
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950 font-sans text-gray-100">
      <CustomCursor scale={cursorScale} />

      {/* Navigation */}
      <motion.nav 
        className="sticky top-0 z-50 backdrop-blur-md bg-gray-900/90 shadow-lg border-b border-blue-900/50 transition-all duration-300 py-4"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 120, damping: 20 }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
          <motion.a 
            href="#landing"
            className="text-xl font-semibold text-blue-400 hover:text-blue-300 transition-colors"
            whileHover={{ scale: 1.05 }}
          >
            Allison Still
          </motion.a>

            <div className="sm:hidden">
              <button
                className="text-gray-300 hover:text-blue-400 focus:outline-none"
                onClick={handleToggle}
              >
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>


            <div className="hidden sm:flex items-center space-x-8">
              {[
                { id: "about", label: "About" },
                { id: "journey", label: "Journey" },
                { id: "projects", label: "Projects" },
                { id: "classes", label: "Classes" },
                { id: "contact", label: "Contact" }
              ].map((section) => (
                <motion.a
                  key={section.id}
                  href={`#${section.id}`}
                  className={`px-3 py-2 rounded-md transition-colors relative group ${
                    activeSection === section.id ? "text-blue-400" : "text-gray-300 hover:text-blue-400"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <span>{section.label}</span>
                  <motion.span 
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500/50 transform origin-left"
                    initial={{ scaleX: activeSection === section.id ? 1 : 0 }}
                    animate={{ scaleX: activeSection === section.id ? 1 : 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              ))}
            </div>
          </div>

          {menuOpen && (
            <motion.div
              className="sm:hidden mt-4 flex flex-col space-y-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              {navLinks.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  onClick={() => setMenuOpen(false)}
                  className="block px-4 py-2 rounded-md text-gray-300 hover:text-blue-400"
                >
                  {section.label}
                </a>
              ))}
            </motion.div>
          )}
        </div>
      </motion.nav>

      <div ref={landingRef}>
        <LandingPage 
          onMouseEnter={handleMouseEnter} 
          onMouseLeave={handleMouseLeave} 
        />
      </div>

      {/* About */}
      <ParallaxBackground intensity={0.25}>
        <div ref={aboutRef}>
          <About 
            isInView={activeSection === "about"} 
            onMouseEnter={handleMouseEnter} 
            onMouseLeave={handleMouseLeave} 
          />
        </div>
      </ParallaxBackground>

      {/* Journey */}
      <ParallaxBackground intensity={0.35}>
        <div ref={journeyRef}>
          <Journey 
            isInView={activeSection === "journey"} 
            onMouseEnter={handleMouseEnter} 
            onMouseLeave={handleMouseLeave} 
          />
        </div>
      </ParallaxBackground>
      
      {/* Projects */}
      <ParallaxBackground intensity={0.4}>
        <div ref={projectsRef}>
          <Projects 
            isInView={activeSection === "projects"} 
            onMouseEnter={handleMouseEnter} 
            onMouseLeave={handleMouseLeave} 
          />
        </div>
      </ParallaxBackground>
            
      {/* Classes */}
      <ParallaxBackground intensity={0.3}>
        <div ref={classesRef}>
          <Classes 
            isInView={activeSection === "classes"} 
            onMouseEnter={handleMouseEnter} 
            onMouseLeave={handleMouseLeave} 
          />
        </div>
      </ParallaxBackground>

      {/* Contact */}
      <ParallaxBackground intensity={0.2}>
        <div ref={contactRef}>
          <Contact 
            isInView={activeSection === "contact"} 
            onMouseEnter={handleMouseEnter} 
            onMouseLeave={handleMouseLeave} 
          />
        </div>
      </ParallaxBackground>

      {/* Footer */}
      <Footer 
        onMouseEnter={handleMouseEnter} 
        onMouseLeave={handleMouseLeave} 
      />
    </div>
  );
}