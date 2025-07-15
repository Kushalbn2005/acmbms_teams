// components/SectionFadeTransition.jsx (Updated with GSAP)
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register the ScrollTrigger plugin once
gsap.registerPlugin(ScrollTrigger);

// Enable ScrollTrigger's normalizeScroll for smoother behavior
// This should ideally be called once globally in your app setup
ScrollTrigger.normalizeScroll(true);

const SectionFadeTransition = ({ children }) => {
  const sectionRef = useRef(null);
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;

  useEffect(() => {
    if (!sectionRef.current) return;

    // If on mobile, make elements immediately visible to avoid animation on small screens
    if (isMobile) {
      gsap.set(sectionRef.current, { opacity: 1, y: 0 });
      return;
    }

    // Initialize the element's state to be hidden and below for the entry animation
    gsap.set(sectionRef.current, { opacity: 0, y: 80 });

    // Create the ScrollTrigger
    const scrollTriggerInstance = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: 'top 70%', // Animation starts when the top of the section hits 70% from viewport top
      end: 'bottom 30%', // Animation ends when the bottom of the section hits 30% from viewport top
      // markers: true, // Uncomment for debugging ScrollTrigger markers

      onEnter: () => {
        // When scrolling down and entering the trigger
        gsap.to(sectionRef.current, {
          opacity: 1,
          y: 0, // Move to natural position
          duration: 1.2,
          ease: 'power3.out',
        });
      },
      onLeave: () => {
        // When scrolling down and leaving the trigger
        gsap.to(sectionRef.current, {
          opacity: 0,
          y: -80, // Disappear by moving UP and fading out
          duration: 0.8, // Faster disappearing effect
          ease: 'power2.in',
        });
      },
      onEnterBack: () => {
        // When scrolling up and re-entering the trigger
        gsap.to(sectionRef.current, {
          opacity: 1,
          y: 0, // Move to natural position
          duration: 1.5, // Slightly faster re-entry
          ease: 'power3.out',
        });
      },
      onLeaveBack: () => {
        // When scrolling up and leaving the trigger (going back up past the start)
        gsap.to(sectionRef.current, {
          opacity: 0,
          y: 80, // Disappear by moving DOWN and fading out (original 'from' position)
          duration: 0.5, // Faster disappearing effect
          ease: 'power2.in',
        });
      },
    });

    // Clean up ScrollTrigger instance on component unmount
    return () => {
      if (scrollTriggerInstance) {
        scrollTriggerInstance.kill(); // Kill the ScrollTrigger to prevent memory leaks
      }
    };
  }, [isMobile]); // Re-run effect if mobile status changes

  return (
    <section
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center px-4 py-20"
    >
      {children}
    </section>
  );
};

export default SectionFadeTransition;
