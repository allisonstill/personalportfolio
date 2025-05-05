"use client";
import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import SectionTitle from "../ui/SectionTitle";
import emailjs from "@emailjs/browser";

export default function Contact({ isInView, onMouseEnter, onMouseLeave }) {
  const ref = useRef(null);
  const formRef = useRef(null);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [mounted, setMounted] = useState(false); // hydration fix

  useEffect(() => {
    setMounted(true);
  }, []);

  const inView = useInView(ref, { margin: "-100px 0px" }) || isInView;

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

  return (
    <section 
      id="contact" 
      ref={ref}
      className="py-24 relative"
    >
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 1440 800" preserveAspectRatio="none">
          {mounted && (
            <motion.path 
            d={mounted 
              ? "M 0,192L48,202.7C96,213,192,235,288,245.3C384,256,480,256,576,245.3C672,235,768,213,864,213.3C960,213,1056,235,1152,229.3C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              : "M 0,0L0,0Z"
            }
            fill="rgba(59, 130, 246, 0.05)"
            animate={mounted ? {
              d: [
                "M0,192L48,202.7C96,213,192,235,288,245.3C384,256,480,256,576,245.3C672,235,768,213,864,213.3C960,213,1056,235,1152,229.3C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                "M0,160L48,176C96,192,192,224,288,240C384,256,480,256,576,250.7C672,245,768,235,864,208C960,181,1056,139,1152,128C1248,117,1344,139,1392,149.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              ]
            } : undefined}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          />
          )}
        </svg>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle>Get In Touch</SectionTitle>
        
        <motion.div 
          className="bg-gray-800/60 backdrop-blur-md rounded-lg shadow-xl p-8 border border-gray-700"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
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
                  onMouseEnter={onMouseEnter}
                  onMouseLeave={onMouseLeave}
                >
                  <motion.div 
                    className="w-10 h-10 rounded-full bg-blue-900/40 flex items-center justify-center text-blue-400 mr-4 border border-blue-500/50"
                    whileHover={{ rotate: 20 }}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mounted ? "M 3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" : "M 0,0L0,0Z"} />
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
                  onMouseEnter={onMouseEnter}
                  onMouseLeave={onMouseLeave}
                >
                  <motion.div 
                    className="w-10 h-10 rounded-full bg-blue-900/40 flex items-center justify-center text-blue-400 mr-4 border border-blue-500/50"
                    whileHover={{ rotate: 20 }}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mounted ? "M 16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" : "M 0,0L0,0Z"} />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d= { mounted ? "M 2 9h4v12H2z" : "M 0,0L0,0Z"}/>
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
                  onMouseEnter={onMouseEnter}
                  onMouseLeave={onMouseLeave}
                >
                  <motion.div 
                    className="w-10 h-10 rounded-full bg-blue-900/40 flex items-center justify-center text-blue-400 mr-4 border border-blue-500/50"
                    whileHover={{ rotate: 20 }}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mounted ? "M 10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" : "M 0,0L0,0Z"} />
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

              <motion.button 
                type="submit" 
                className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-md shadow-md"
                whileHover={{ scale: 1.02, boxShadow: "0 10px 25px -5px rgba(37, 99, 235, 0.5)" }}
                whileTap={{ scale: 0.98 }}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
              >
                Send Message
              </motion.button>

              {success && <p className="text-green-400 mt-4">Message sent successfully!</p>}
              {error && <p className="text-red-400 mt-4">Something went wrong. Please try again.</p>}
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}