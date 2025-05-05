export const springConfig = { 
  stiffness: 100, 
  damping: 30, 
  restDelta: 0.001 
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } }
};

export const slideUp = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
};

export const slideDown = {
  hidden: { y: -50, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
};

export const slideLeft = {
  hidden: { x: 50, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.5 } }
};

export const slideRight = {
  hidden: { x: -50, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.5 } }
};

export const scaleUp = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.5 } }
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export const letterAnimation = {
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

export const pageTransition = {
  initial: { opacity: 0, x: 20 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -20 },
  transition: { duration: 0.5, ease: "easeInOut" }
};

export const floatAnimation = {
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

export const card3DAnimation = {
  rest: { scale: 1, rotateY: 0, rotateX: 0 },
  hover: { 
    scale: 1.05, 
    rotateY: 10, 
    rotateX: 5,
    transition: { duration: 0.4, ease: "easeOut" }
  },
};

export const textReveal = {
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

export const splitText = (text) => {
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