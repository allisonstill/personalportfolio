"use client"

import Image from "next/image";
import AnimatedText from "./components/animations/AnimatedText";
import ParallaxBackground from "./components/backgrounds/ParallaxBackground";
import { useState, useEffect, useRef } from "react";
import Terminal from "./components/Terminal"
import { 
  motion, 
  useScroll, 
  useTransform, 
  useSpring, 
  useMotionValue, 
  useAnimationControls, 
  useInView 
} from "framer-motion";
import emailjs from "@emailjs/browser";
import { FaReact, FaJs, FaPython, FaNodeJs, FaGitAlt } from 'react-icons/fa';
import {
  Code2,
  GraduationCap,
  Briefcase,
  FlaskConical,
  Store,
  Sparkles,
  BookOpen
} from "lucide-react";


export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState("hero");
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const formRef = useRef();
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);


  // References for different sections
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const journeyRef = useRef(null);
  const projectsRef = useRef(null);
  const classesRef = useRef(null);
  const contactRef = useRef(null);
  
  // For page load animations
  const pageControls = useAnimationControls();

  // useInView hooks for section detection
  const aboutInView = useInView(aboutRef, { margin: "-100px 0px" });
  const journeyInView = useInView(journeyRef, { margin: "-100px 0px" });
  const projectsInView = useInView(projectsRef, { margin: "-100px 0px" });
  const classesInView = useInView(classesRef, { margin: "-100px 0px" });
  const contactInView = useInView(contactRef, { margin: "-100px 0px" });
  
  // Use scroll hooks for parallax effects
  const { scrollY: scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  
  // Spring animation for smooth movement
  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  const smoothY = useSpring(y, springConfig);
  
  // Custom cursor motion value
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const cursorScale = useMotionValue(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(false);
    setError(false);
  
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => setSuccess(true),
        () => setError(true)
      );
  };

  // Journey timeline data
  const journeyItems = [
    {
      year: "2022-Present",
      title: "Computer Science Major",
      description: "Third-year at The University of Texas at Austin, focusing on software development and AI, with minors in Business and Educational Psychology. GPA: 3.75/4.0",
      icon: <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6" />
    },
    {
      year: "2024–2025",
      title: "Advanced Coursework & Independent Projects",
      description: "Explored advanced algorithms, machine learning, and systems courses while building personal passion projects in my free time.",
      icon: <BookOpen className="w-5 h-5 sm:w-6 sm:h-6" />
    },
    {
      year: "Summer 2024",
      title: "Sales Associate, Nina Berenato Jewelry",
      description: "Applied precision tech in custom jewelry fitting while refining user experience through client engagement.",
      icon: <Sparkles className="w-5 h-5 sm:w-6 sm:h-6" />
    },
    {
      year: "Summer 2023",
      title: "Style Advisor, Aritzia",
      description: "Developed customer service and training skills while adapting to a fast-paced retail tech environment.",
      icon: <Store className="w-5 h-5 sm:w-6 sm:h-6" />
    },
    {
      year: "Summer 2022 - October 2023",
      title: "Digital Strategist Intern",
      description: "Worked at Stokes Sign Company, applying web scraping and SEO strategies to enhance digital marketing reach.",
      icon: <Briefcase className="w-5 h-5 sm:w-6 sm:h-6" />
    }
  ];

  // Projects data
  const projects = [
    {
      title: "ParentAidATX",
      description: "A full stack resource platform for single parents in the Austin area, providing affordable housing, nearby childcare, and books.",
      technologies: ["React", "Flask", "PostgreSQL", "RESTful APIs", "D3.js", "HTML/CSS"],
      image: "/parentAidATX.png",
      link: "#"
    },
    {
      title: "Austin Animal Shelter Outcome Prediction Framework",
      description: "A multi-class classification model used to predict animal shelter outcomes for one of the largest no-kill shelters in the U.S.",
      technologies: ["XGBoost", "Neural Networks", "SMOTE Sampling"],
      image: "/austinAnimalCenter.jpg",
      link: "#"
    },
    {
      title: "More Projects on GitHub",
      description: "See more of my projects featuring machine learning and full-stack development on GitHub",
      technologies: ["JavaScript", "Python", "C"],
      image: "/github.jpg",
      link: "#",
      miniProjects: [
        {
          name: "CLI Habit Tracker",
          link: "https://gitlab.com/your-username/habit-tracker",
        },
        {
          name: "Regex Visualizer",
          link: "https://gitlab.com/your-username/regex-visualizer",
        },
        {
          name: "Quick Portfolio Generator",
          link: "https://gitlab.com/your-username/portfolio-generator",
        },
      ]
    }
  ];

  // Classes/Courses data
  const classes = [
    {
      code: "CS 373",
      name: "Software Engineering",
      description: "Current knowledge, techniques, and theories in large software system design and development"
    },
    {
      code: "CS 331",
      name: "Algorithms and Complexity",
      description: "Investigation of algorithmic paradigms: divide and conquer, dynamic programming, greedy algorithms, graph algorithms, randomized algorithms, undecidability, NP-completeness, and approximation algorithms"
    },
    {
      code: "CS 439",
      name: "Principles of Computer Systems (Operating Systems)",
      description: "Introduction to computer systems software abstractions with an emphasis on the connection of these abstractions to underlying computer hardware. Key abstractions include threads, virtual memory, protection, and I/O."
    },
    {
      code: "CS 363M",
      name: "Principles of Machine Learning I",
      description: "Machine learning: data processing, regression, classification, clustering, dimensionality reduction, and neural networks"
    },
    {
      code: "CS 429",
      name: "Computer Organizations and Architecture",
      description: "An introduction to low-level computer design ranging from the basics of digital design to the hardware/software interface for application programs. Includes basic systems principles of pipelining and caching, and requires writing and understanding programs at multiple levels."
    },
    {
      code: "M 340L",
      name: "Matrices/Matrix Calculations",
      description: "Techniques of matrix calculations and applications of linear algebra."
    },
    {
      code: "CS 314",
      name: "Data Structures",
      description: "Introduction to specifications, simple unit testing, and debugging; building and using canonical data structures; algorithm analysis and reasoning techniques such as assertions and invariants."
    },
    {
      code: "CS 311",
      name: "Discrete Math",
      description: "A focus on discrete mathematical tools of fundamental importance to the working computer scientist. An emphasis is placed on using logical notation to express rigorous mathematical arguments. Subjects include proof by induction, introduction to graph theory, recurrences, sets, functions, and an introduction to program correctness."
    },
    {
      code: "M 358K",
      name: "Applied Statistics",
      description: "Exploratory data analysis, correlation and regression, data collection, sampling distributions, confidence intervals, and hypothesis testing"
    }
  ];

  // Update active section based on which section is in view
  useEffect(() => {
    if (contactInView) setActiveSection("contact");
    else if (classesInView) setActiveSection("classes");
    else if (projectsInView) setActiveSection("projects");
    else if (journeyInView) setActiveSection("journey");
    else if (aboutInView) setActiveSection("about");
    else setActiveSection("hero");
  }, [aboutInView, journeyInView, projectsInView, classesInView, contactInView]);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Start page animation sequence
  useEffect(() => {
    async function sequence() {
      await pageControls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.8 }
      });
    }
    sequence();
  }, [pageControls]);

  // Track cursor for custom cursor effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [cursorX, cursorY]);

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6 } }
  };

  const slideUp = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  // NEW: Letter animation for text effects
  const letterAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({ 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.5, 
        ease: "easeOut",
        delay: i * 0.05
      } 
    })
  };

  // NEW: Page transition for section changes
  const pageTransition = {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 },
    transition: { duration: 0.5, ease: "easeInOut" }
  };
  
  const floatAnimation = {
    initial: { y: 0 },
    animate: { 
      y: [0, -10, 0],
      transition: { 
        repeat: Infinity, 
        duration: 3,
        ease: "easeInOut" 
      }
    }
  };

  // NEW: Enhanced 3D card animation
  const card3DAnimation = {
    rest: { scale: 1, rotateY: 0, rotateX: 0 },
    hover: { 
      scale: 1.05, 
      rotateY: 10, 
      rotateX: 5,
      transition: { duration: 0.4, ease: "easeOut" }
    },
  };

  // NEW: Text reveal animation
  const textReveal = {
    hidden: { 
      opacity: 0,
      clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" 
    },
    visible: { 
      opacity: 1,
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      transition: { duration: 1, ease: "easeOut", delay: 0.2 }
    }
  };

  // Split text into characters for animated text
  const splitText = (text) => {
    return text.split('').map((char, i) => (
      <motion.span
        key={i}
        custom={i}
        variants={letterAnimation}
        initial="hidden"
        animate="visible"
        className="inline-block"
      >
        {char === " " ? "\u00A0" : char}
      </motion.span>
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950 font-sans text-gray-100">
      {/* Custom cursor - NEW */}
      <motion.div 
        className="fixed w-12 h-12 rounded-full border-2 border-blue-400 pointer-events-none z-50 mix-blend-difference"
        style={{ 
          x: cursorX,
          y: cursorY,
          scale: cursorScale,
          translateX: "-50%",
          translateY: "-50%"
        }}
        transition={{ type: "spring", damping: 20, stiffness: 300 }}
      />

      {/* Navigation */}
      <motion.nav 
        className={`sticky top-0 z-50 backdrop-blur-md bg-gray-900/90 shadow-lg border-b border-blue-900/50 transition-all duration-300 py-4`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 120, damping: 20 }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <motion.div 
              className="flex items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onMouseEnter={() => cursorScale.set(1.5)}
              onMouseLeave={() => cursorScale.set(1)}
            >
              <motion.span 
                className="text-xl font-semibold"
                animate={{ 
                  backgroundImage: ["linear-gradient(90deg, #60a5fa 0%, #8b5cf6 100%)", "linear-gradient(90deg, #8b5cf6 0%, #60a5fa 100%)"] 
                }}
                transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
                style={{ 
                  backgroundClip: "text", 
                  WebkitBackgroundClip: "text",
                  color: "transparent"
                }}
              >
                Allison Still
              </motion.span>
            </motion.div>
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
                  onMouseEnter={() => cursorScale.set(1.5)}
                  onMouseLeave={() => cursorScale.set(1)}
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
        </div>
      </motion.nav>

      {/* Enhanced Hero Section */}
      <section 
        ref={heroRef}
        className="h-screen flex flex-col items-center justify-center relative overflow-hidden"
      >
        {/* Animated background glow tied to scroll position - NEW */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-purple-900/20"
          style={{ 
            opacity: useTransform(scrollYProgress, [0, 0.2], [0.5, 0]),
            y: useTransform(scrollYProgress, [0, 0.2], [0, 100])
          }}
        />

        {/* Animated Tree GIF with enhanced visibility */}
        <motion.div
  className="absolute top-24 sm:top-18 w-full flex justify-center z-10 opacity-45"
  style={{ pointerEvents: "none" }}
>
  <motion.img
    src="/branches.gif"
    alt="Animated Tree"
    className="w-30 sm:w-48" // Adjust width
    animate={{ y: [0, -5, 0] }}
    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
  />
</motion.div>

        {/* Enhanced Greeting Text with Neon Effect - Using textReveal animation */}
        <div className="z-10 text-center px-4 relative">
          <motion.h1 
            className="text-7xl sm:text-8xl font-bold mb-6 tracking-tighter"
            variants={textReveal}
            initial="hidden"
            animate="visible"
            onMouseEnter={() => cursorScale.set(2)}
            onMouseLeave={() => cursorScale.set(1)}
          >
            <motion.span 
              className="block relative"
              style={{ 
                textShadow: "0 0 4px #60a5fa, 0 0 8px #60a5fa, 0 0 12px #60a5fa"
              }}
            >
              Allison Still
            </motion.span>
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.6, 
              ease: "easeOut",
              delay: 0.8
            }}
          >
            <AnimatedText 
              text="Computer Science Student"
              type="heading"
              className="text-3xl sm:text-4xl mb-8 tracking-wide"
              animationType="typewriter" // Changed to typewriter
              color="text-blue-300"
            />
          </motion.div>
          
          {/* Animated divider line */}
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto my-8 rounded-full"
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 96, opacity: 1 }}
            transition={{ 
              duration: 1.2, 
              ease: "easeInOut",
              delay: 1.2 
            }}
          />
        </div>

        {/* Improved Scroll Down Indicator */}
        <motion.a
          href="#about"
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-blue-400 hover:text-blue-300 transition-colors"
          initial={{ opacity: 0, y: 10 }}
          animate={{ 
            opacity: 1, 
            y: [0, 10, 0],
          }}
          transition={{ 
            opacity: { duration: 1, delay: 1.8 },
            y: { 
              duration: 1.5, 
              repeat: Infinity, 
              ease: "easeInOut", 
              delay: 1.8 
            }
          }}
          onMouseEnter={() => cursorScale.set(1.5)}
          onMouseLeave={() => cursorScale.set(1)}
        >
          <span className="mb-2 text-lg">Explore</span>
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 14l-7 7m0 0l-7-7m7 7V3" 
            />
          </svg>
        </motion.a>
      </section>

      {/* AnimatePresence for smooth section transitions - NEW */}
        {/* About Section */}
        <ParallaxBackground intensity={0.25}>
          <section id="about" className="py-24">
            <motion.section 
              key="about"
              ref={aboutRef}
              initial="hidden"
              animate={aboutInView ? "visible" : "hidden"}
              exit={{ opacity: 0, y: 20 }}
              variants={fadeIn}
              {...pageTransition}
            >
              <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center gap-12">
                  <motion.div 
                    className="flex-1"
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
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
                        onMouseEnter={() => cursorScale.set(1.5)}
                        onMouseLeave={() => cursorScale.set(1)}
                      >
                        {splitText("Allison Still")}
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
                      <motion.button 
                        className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white rounded-md shadow-lg transition-colors"
                        whileHover={{ 
                          scale: 1.05, 
                          boxShadow: "0 10px 25px -5px rgba(37, 99, 235, 0.5)" 
                        }}
                        whileTap={{ scale: 0.95 }}
                        onMouseEnter={() => cursorScale.set(1.5)}
                        onMouseLeave={() => cursorScale.set(1)}
                        onClick = {() => {
                          document.getElementById('projects')?.scrollIntoView({behavior: 'smooth'})
                        }}
                      >
                      <motion.span className="relative z-10">View My Projects</motion.span>
                      </motion.button>
                      <motion.button 
                        className="px-6 py-3 border border-blue-500 text-blue-400 hover:bg-blue-900/30 rounded-md transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onMouseEnter={() => cursorScale.set(1.5)}
                        onMouseLeave={() => cursorScale.set(1)}
                        onClick = {() => {
                          document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})
                        }}
                      >
                      <motion.span className="relative z-10">Contact Me</motion.span>                
                      </motion.button>
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
                      onMouseEnter={() => cursorScale.set(1.5)}
                      onMouseLeave={() => cursorScale.set(1)}
                    >
                      {/* Replace with your actual image */}
                      <div className="w-full h-full bg-gray-800 flex items-center justify-center text-6xl">
                        <motion.div
                          initial={{ scale: 0.5, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ delay: 0.5, duration: 0.5 }}
                        >
                          <Image
                            src="/recent-allison-still-headshot.JPG"
                            alt="Profile Image"
                            width={375}
                            height={620}
                            className="rounded-full"
                          />
                        </motion.div>
                      </div>
                      
                      {/* Floating icons */}
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
                        <motion.span
                          animate={{
                            rotateY: [0, 360],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            repeatType: "loop",
                            ease: "linear"
                          }}
                        >
                          💻
                        </motion.span>
                        
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
                        <motion.span
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            repeatType: "reverse"
                          }}
                        >
                          🚀
                        </motion.span>
                      </motion.div>
                    </motion.div>
                  </motion.div>
                </div>
                
                {/* Tech stack floating section */}
                <motion.div 
                  className="mt-20 p-6 bg-gray-800/70 backdrop-blur-md rounded-xl shadow-xl border border-gray-700"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  <h3 className="text-xl font-semibold mb-4 text-center text-blue-300">My Tech Stack</h3>
                  <div className="flex flex-wrap justify-center gap-8">
                    {[
                      { name: "React", icon: <FaReact className="text-blue-400 text-2xl" /> },
                      { name: "JavaScript", icon: <FaJs className="text-yellow-400 text-2xl" /> },
                      { name: "Python", icon: <FaPython className="text-green-400 text-2xl" /> },
                      { name: "Node.js", icon: <FaNodeJs className="text-lime-400 text-2xl" /> },
                      { name: "Git", icon: <FaGitAlt className="text-orange-500 text-2xl" /> }
                    ].map((tech, index) => (
                      <motion.div 
                        key={tech.name}
                        className="flex flex-col items-center"
                        whileHover={{ y: -5, scale: 1.1 }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 + (index * 0.1) }}
                        onMouseEnter={() => cursorScale.set(1.5)}
                        onMouseLeave={() => cursorScale.set(1)}
                      >
                        <span className="text-3xl mb-2">{tech.icon}</span>
                        <span className="text-sm text-gray-300">{tech.name}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.section>
          </section>
        </ParallaxBackground>

        {/* Journey Section - enhanced with useInView and springMotion */}
        <ParallaxBackground intensity={0.35}>
          <section id="journey" className="py-28 bg-gradient-to-b from-gray-900 to-gray-950 text-gray-100">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.h2 
                className="text-3xl font-bold text-center text-blue-300 mb-16"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
              >
                My Journey
              </motion.h2>
              
              <div 
                className="relative pl-8 sm:pl-12 before:absolute before:top-0 before:left-4 sm:before:left-5 before:h-full before:w-1 before:bg-gradient-to-b before:from-indigo-500 before:to-blue-600"
                ref={journeyRef}
              >
                {journeyItems.map((item, index) => {
                  // Create individual inView for staggered animations
                  const itemRef = useRef(null);
                  const isInView = useInView(itemRef, { once: true, margin: "-50px" });
                  
                  return (
                    <motion.div
                      key={index}
                      ref={itemRef}
                      className="relative mb-12 group"
                      initial={{ opacity: 0, x: -30 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                      transition={{ 
                        duration: 0.5, 
                        delay: index * 0.2,
                        type: "spring",
                        stiffness: 100,
                        damping: 20
                      }}
                      onMouseEnter={() => cursorScale.set(1.5)}
                      onMouseLeave={() => cursorScale.set(1)}
                    >
                      {/* Dot icon */}
                      <div className="absolute left-[-6px] top-2 sm:left-[-8px]">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-indigo-500 to-blue-600 text-white flex items-center justify-center shadow-lg border-2 border-white">
                        {item.icon}
                      </div>
                      </div>

                      {/* Card */}
                      <motion.div 
                        className="ml-8 sm:ml-12 p-6 bg-gray-800/80 backdrop-blur-md rounded-lg border border-gray-700 shadow-xl transition-transform duration-300 group-hover:scale-[1.02] group-hover:shadow-blue-500/30"
                        variants={card3DAnimation}
                        initial="rest"
                        whileHover="hover"
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
        </ParallaxBackground>
        
        {/* Projects Section with enhanced card animations */}
        <ParallaxBackground intensity={0.4}>
          <section id="projects" className="py-24">
            <motion.section 
              key="projects"
              ref={projectsRef}
              initial="hidden"
              animate={projectsInView ? "visible" : "hidden"}
              exit={{ opacity: 0 }}
              variants={fadeIn}
              {...pageTransition}
            >
              <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.h2 
                  className="text-3xl font-bold mb-12 text-center text-blue-300"
                  variants={textReveal}
                >
                  My Projects
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {projects.map((project, index) => {
                    // Using useMotionValue for even more dynamic card animations
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
                        onMouseEnter={() => cursorScale.set(1.5)}
                        onMouseMove={(e) => {
                          // Calculate mouse position relative to card center
                          const rect = e.currentTarget.getBoundingClientRect();
                          const centerX = rect.left + rect.width / 2;
                          const centerY = rect.top + rect.height / 2;
                          x.set(e.clientX - centerX);
                          y.set(e.clientY - centerY);
                        }}
                        onMouseLeave={() => {
                          x.set(0);
                          y.set(0); // 🛠️ This ensures reset
                          cursorScale.set(1);
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
                              className="rounded-t-lg object-cover w-full h-48"
                            />
                            </a>
                            <div className="p-6">
                              <h3 className="text-xl font-semibold mb-2 text-blue-300">{project.title}</h3>
                              {project.miniProjects ? (
  <div className="text-gray-300 mb-4">
    <p>{project.description}</p>
    <ul className="mt-4 list-disc list-inside space-y-1 text-blue-300">
      {project.miniProjects.map((mini, i) => (
        <li key={i}>
          <a
            href={mini.link}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline hover:text-blue-200 transition-colors"
          >
            {mini.name}
          </a>
        </li>
      ))}
    </ul>
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
            </motion.section>
          </section>
        </ParallaxBackground>
              
        {/* Classes Section with enhanced animations */}
        <ParallaxBackground intensity={0.3}>
          <section id="classes" className="py-24">
            <motion.section 
              key="classes"
              ref={classesRef}
              initial="hidden"
              animate={classesInView ? "visible" : "hidden"}
              exit={{ opacity: 0 }}
              variants={fadeIn}
              {...pageTransition}
            >
              <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.h2 
                  className="text-3xl font-bold mb-12 text-center text-blue-300"
                  variants={textReveal}
                >
                  Classes & Skills
                </motion.h2>
                <motion.div 
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                >
                  {classes.map((course, index) => (
                    <motion.div 
                      key={index} 
                      className="bg-gray-800/70 backdrop-blur-sm p-6 rounded-lg shadow-md border border-gray-700"
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
                      whileHover={{ 
                        scale: 1.03,
                        boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.2), 0 4px 6px -2px rgba(0, 0, 0, 0.1)",
                        y: -5
                      }}
                      onMouseEnter={() => cursorScale.set(1.3)}
                      onMouseLeave={() => cursorScale.set(1)}
                    >
                      <div className="text-xs font-medium text-blue-400 mb-1">{course.code}</div>
                      <h3 className="text-lg font-semibold mb-2 text-gray-100">{course.name}</h3>
                      <p className="text-gray-300">{course.description}</p>
                    </motion.div>
                  ))}
                </motion.div>
                
                {/* Skills with progress bars - NEW */}
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
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {[
                      { name: "JavaScript", level: 90 },
                      { name: "React", level: 85 },
                      { name: "Python", level: 80 },
                      { name: "Java", level: 75 },
                      { name: "HTML/CSS", level: 95 },
                      { name: "Git", level: 85 },
                      { name: "SQL", level: 70 },
                      { name: "Node.js", level: 65 }
                    ].map((skill, index) => {
                      // Create a spring animation for the skill bar
                      const progress = useMotionValue(0);
                      const springProgress = useSpring(progress, springConfig);
                      
                      return (
                        <motion.div 
                          key={index} 
                          className="mb-4"
                          custom={index}
                          variants={{
                            hidden: { opacity: 0 },
                            visible: (i) => ({
                              opacity: 1,
                              transition: {
                                delay: i * 0.1,
                                duration: 0.3
                              }
                            })
                          }}
                          onMouseEnter={() => cursorScale.set(1.3)}
                          onMouseLeave={() => cursorScale.set(1)}
                          whileInView={() => {
                            progress.set(skill.level);
                            return {};
                          }}
                          viewport={{ once: true, margin: "-50px" }}
                        >
                          <div className="flex justify-between mb-1">
                            <span className="font-medium text-gray-100">{skill.name}</span>
                            <motion.span 
                              className="text-blue-300"
                              initial={{ opacity: 0 }}
                              whileInView={{ opacity: 1 }}
                              viewport={{ once: true }}
                              transition={{ delay: index * 0.1 + 0.5 }}
                            >
                              {skill.level}%
                            </motion.span>
                          </div>
                          <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                            <motion.div 
                              className="h-full bg-gradient-to-r from-blue-500 to-indigo-600"
                              style={{ width: springProgress.get() + '%' }}
                              initial={{ width: '0%' }}
                              animate={{ width: skill.level + '%' }}
                              transition={{ 
                                duration: 1.5, 
                                ease: "easeOut",
                                delay: index * 0.1
                              }}
                            />
                          </div>
                        </motion.div>
                      );
                    })}
                  </motion.div>
                </motion.div>
              </div>
            </motion.section>
          </section>
        </ParallaxBackground>

        {/* Contact Section with enhanced animations */}
        <ParallaxBackground intensity={0.2}>
          <section id="contact" className="py-24 relative">
            {/* Animated background shape */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
              <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 1440 800" preserveAspectRatio="none">
                <motion.path 
                  d="M0,192L48,202.7C96,213,192,235,288,245.3C384,256,480,256,576,245.3C672,235,768,213,864,213.3C960,213,1056,235,1152,229.3C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" 
                  fill="rgba(59, 130, 246, 0.05)"
                  animate={{
                    d: [
                      "M0,192L48,202.7C96,213,192,235,288,245.3C384,256,480,256,576,245.3C672,235,768,213,864,213.3C960,213,1056,235,1152,229.3C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                      "M0,160L48,176C96,192,192,224,288,240C384,256,480,256,576,250.7C672,245,768,235,864,208C960,181,1056,139,1152,128C1248,117,1344,139,1392,149.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                    ],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut"
                  }}
                />
              </svg>
            </div>
            
            <motion.section 
              key="contact"
              ref={contactRef}
              className="relative z-10"
              initial="hidden"
              animate={contactInView ? "visible" : "hidden"}
              exit={{ opacity: 0 }}
              variants={fadeIn}
              {...pageTransition}
            >
              <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.h2 
                  className="text-3xl font-bold mb-12 text-center text-blue-300"
                  variants={textReveal}
                >
                  Get In Touch
                </motion.h2>
                
                <motion.div 
                  className="bg-gray-800/60 backdrop-blur-md rounded-lg shadow-xl p-8 border border-gray-700"
                  variants={slideUp}
                  whileHover={{ 
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                  }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <motion.div
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                    >
                      <h3 className="text-xl font-semibold mb-6 text-blue-300">Contact Information</h3>
                      <div className="space-y-6">
                        <motion.div 
                          className="flex items-center"
                          whileHover={{ x: 5 }}
                          transition={{ type: "spring", stiffness: 300 }}
                          onMouseEnter={() => cursorScale.set(1.5)}
                          onMouseLeave={() => cursorScale.set(1)}
                        >
                          <motion.div 
                            className="w-10 h-10 rounded-full bg-blue-900/40 flex items-center justify-center text-blue-400 mr-4 border border-blue-500/50"
                            whileHover={{ rotate: 20 }}
                          >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                          </motion.div>
                          <div>
                            <div className="text-sm text-gray-400 mb-1">Email</div>
                            <a href="mailto:allisoncstill@gmail.com" className="text-blue-300 hover:text-blue-200 transition-colors">
                              allisoncstill@gmail.com
                            </a>
                          </div>
                        </motion.div>
                        
                        <motion.div 
                          className="flex items-center"
                          whileHover={{ x: 5 }}
                          transition={{ type: "spring", stiffness: 300 }}
                          onMouseEnter={() => cursorScale.set(1.5)}
                          onMouseLeave={() => cursorScale.set(1)}
                        >
                          <motion.div 
                            className="w-10 h-10 rounded-full bg-blue-900/40 flex items-center justify-center text-blue-400 mr-4 border border-blue-500/50"
                            whileHover={{ rotate: 20 }}
                          >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2 9h4v12H2z" />
                              <circle cx="4" cy="4" r="2" stroke="currentColor" strokeWidth={2} />
                            </svg>
                          </motion.div>
                          <div>
                            <div className="text-sm text-gray-400 mb-1">LinkedIn</div>
                            <a href="https://www.linkedin.com/in/allison-still/" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-200 transition-colors">
                              linkedin.com/in/allison-still/
                            </a>
                          </div>
                        </motion.div>
                        
                        <motion.div 
                          className="flex items-center"
                          whileHover={{ x: 5 }}
                          transition={{ type: "spring", stiffness: 300 }}
                          onMouseEnter={() => cursorScale.set(1.5)}
                          onMouseLeave={() => cursorScale.set(1)}
                        >
                          <motion.div 
                            className="w-10 h-10 rounded-full bg-blue-900/40 flex items-center justify-center text-blue-400 mr-4 border border-blue-500/50"
                            whileHover={{ rotate: 20 }}
                          >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                            </svg>
                          </motion.div>
                          <div>
                            <div className="text-sm text-gray-400 mb-1">GitHub</div>
                            <a href="https://github.com/allisonstill" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-200 transition-colors">
                              github.com/allisonstill
                            </a>
                          </div>
                        </motion.div>
                      </div>
                      
                    </motion.div>
                    
                    <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
  <div>
    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Name</label>
    <input type="text" name="user_name" required className="w-full px-4 py-2 bg-gray-900/60 border border-gray-600 rounded-md text-gray-200" />
  </div>
  <div>
    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
    <input type="email" name="user_email" required className="w-full px-4 py-2 bg-gray-900/60 border border-gray-600 rounded-md text-gray-200" />
  </div>
  <div>
    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
    <textarea name="message" rows="4" required className="w-full px-4 py-2 bg-gray-900/60 border border-gray-600 rounded-md text-gray-200" />
  </div>

  <button type="submit" className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-md shadow-md">
    Send Message
  </button>

  {success && <p className="text-green-400 mt-4">Message sent successfully!</p>}
  {error && <p className="text-red-400 mt-4">Something went wrong. Please try again.</p>}
</form>

                  </div>
                </motion.div>
              </div>
            </motion.section>
          </section>
        </ParallaxBackground>

      {/* Enhanced Footer */}
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
                onMouseEnter={() => cursorScale.set(1.5)}
                onMouseLeave={() => cursorScale.set(1)}
              >
                Allison Still
              </motion.div>
              <div className="text-sm text-gray-400">Computer Science Student</div>
            </motion.div>
            
            {/* Navigation links */}
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
                  onMouseEnter={() => cursorScale.set(1.5)}
                  onMouseLeave={() => cursorScale.set(1)}
                >
                  {item}
                </motion.a>
              ))}
            </motion.div>
            
          </div>
        </div>
      </motion.footer>
    </div>
  );
}