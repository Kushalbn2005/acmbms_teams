import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const HeroSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.7]); // shrink heading
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.4]); // optional fade

  return (
    <section
      ref={ref}
      className="w-full min-h-screen bg-[#110F03] flex items-center justify-center px-6 text-center text-white sticky top-0 z-10"
    >
      <motion.div
        className="max-w-6xl"
        style={{ opacity }}
      >
        <motion.h1
          style={{ scale }}
          className="font-bebas text-[100px] sm:text-[150px] md:text-[150px] leading-none font-normal"
        >
          Meet the{' '}
          <span className="bg-gradient-to-r from-[#3ABEFF] to-[#005FFF] bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(255,255,255,0.6)]">
            team
          </span>
        </motion.h1>

        <p className="mt-6 font-bricolage text-xl sm:text-2xl md:text-3xl text-[#FEFEFF] font-normal max-w-4xl mx-auto">
          Passionate students and dedicated faculty working together to advance computer science education and foster innovation in our ACM Student Chapter.
        </p>
      </motion.div>
    </section>
  );
};

export default HeroSection;
