import React from 'react';
import AnimateOnScroll from './ScrollAnimation';
import ProfileCard from './ProfileCard/ProfileCard';
import { motion } from 'framer-motion';

const headingVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.95, letterSpacing: '0.05em' },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1.08,
    letterSpacing: '0.15em',
    transition: {
      duration: 1.2,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};
const subtitleVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.1,
      delay: 0.3,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const faculty = [
  { name: 'Dr. Suresh Kumar', role: 'Faculty Advisor', image: '', linkedin: 'https://www.linkedin.com/in/kushal-b-n-1404002b4/', github: 'https://github.com/Kushalbn2005' },
  { name: 'Dr. Priya Singh', role: 'Co-Advisor', image: '' },
  { name: 'Dr. Arun Patel', role: 'Mentor', image: '' },
];
const sponsor = [
  { name: 'TechNova Inc.', role: 'Sponsor', image: '/sponsor1.jpg' },
  { name: 'InnoSoft', role: 'Sponsor', image: '/sponsor2.jpg' },
  { name: 'CodeWorks', role: 'Sponsor', image: '/sponsor3.jpg' },
];

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.18,
      duration: 1.2,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const FacultyAndSponsor = () => {
  const people = [...faculty, ...sponsor];
  return (
    <section className="min-h-screen w-full flex flex-col justify-center items-center px-4">
      <AnimateOnScroll>
        <div className="text-center mb-12">
          <motion.h2
            variants={headingVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.7 }}
            className="text-6xl md:text-7xl font-bebas tracking-wide bg-gradient-to-r from-[#FFF9C4] via-[#F5B82E] to-[#B8860B] text-transparent bg-clip-text"
          >
            Faculty Advisor & Sponsor
          </motion.h2>

          <motion.p
            variants={subtitleVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.7 }}
            className="mt-4 text-lg md:text-xl font-montserrat text-gray-300 max-w-2xl mx-auto"
          >
            Academic leadership guiding our chapter's mission and vision
          </motion.p>
        </div>
      </AnimateOnScroll>
      <AnimateOnScroll delay={0.5}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-x-10 w-full max-w-7xl mx-auto mb-8">
          {people.map((member, i) => (
            <motion.div
              key={i}
              className="h-full w-full"
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
              whileHover={{ scale: 1.04, boxShadow: '0 8px 32px 0 rgba(80,80,180,0.18)' }}
              transition={{ type: 'tween', duration: 0.25 }}
            >
              <ProfileCard
                name={member.name}
                title={member.role}
                avatarUrl={member.image}
                handle={member.name.split(" ")[0].toLowerCase()}
                status="Active"
                miniAvatarUrl={member.image}
                showUserInfo={false}
                linkedinUrl={member.linkedin}
                githubUrl={member.github}
                enableTilt={true}
              />
            </motion.div>
          ))}
        </div>
      </AnimateOnScroll>
    </section>
  );
};

export default FacultyAndSponsor;
