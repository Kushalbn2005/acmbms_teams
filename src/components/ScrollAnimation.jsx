import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const AnimateOnScroll = ({ children, delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    threshold: 0.1,
    triggerOnce: true,
    rootMargin: '0px 0px -20% 0px'
  });

  const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;

  const variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.8,
        delay,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={isMobile || isInView ? 'visible' : 'hidden'}
      className="w-full"
    >
      {children}
    </motion.div>
  );
};

export default AnimateOnScroll;
