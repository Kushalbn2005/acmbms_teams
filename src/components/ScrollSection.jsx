// components/SectionFadeTransition.jsx
import React, { useRef, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const fadeUpDownVariants = {
  initial: { opacity: 0, y: 80 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,       // longer entrance
      delay: 0.2,          // entrance delay
      ease: 'easeOut',
    },
  },
  exit: {
    opacity: 0,
    y: -80,
    transition: {
      duration: 0.8,       // faster exit
      ease: 'easeIn',
    },
  },
};

const SectionFadeTransition = ({ children }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const { ref: inViewRef, inView } = useInView({ threshold: 0.4 });

  const setRefs = (node) => {
    ref.current = node;
    inViewRef(node);
  };

  useEffect(() => {
    if (inView) {
      controls.start('animate');
    } else {
      controls.start('exit');
    }
  }, [inView, controls]);

  return (
    <motion.section
      ref={setRefs}
      variants={fadeUpDownVariants}
      initial="initial"
      animate={controls}
      exit="exit"
      className="min-h-screen flex items-center justify-center px-4 py-20"
    >
      {children}
    </motion.section>
  );
};

export default SectionFadeTransition;
