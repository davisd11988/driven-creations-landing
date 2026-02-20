'use client';

import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function ScrollCollision() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Observe when section enters/leaves viewport
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Play video from the start when section comes into view
          const video = videoRef.current;
          if (video) {
            video.currentTime = 0;
            video.play().catch(() => {});
          }
        } else {
          setIsVisible(false);
          // Pause and reset when out of view
          const video = videoRef.current;
          if (video) {
            video.pause();
            video.currentTime = 0;
          }
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="collision"
      ref={sectionRef}
      className="relative h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Video Element — plays once naturally on scroll-in */}
      <video
        ref={videoRef}
        src="/videos/drive_deadline_clash_purple.mp4"
        poster="/images/drive_deadline_keyed_poster.jpg"
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/45 z-[5]" />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30 z-10" />

      {/* Text Content — fades in and stays */}
      <motion.div
        className="absolute inset-0 flex flex-col items-center justify-center z-20 px-4 text-center"
        initial={{ opacity: 0, scale: 0.97 }}
        animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.97 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <p className="text-brand-purple-light text-sm uppercase tracking-[0.2em] mb-4">
          The Clash
        </p>
        <h2 className="font-display font-bold text-5xl md:text-7xl text-white">
          Drive vs. Deadline
        </h2>
        <p className="text-text-secondary text-lg mt-4 max-w-xl">
          One fights for craft. The other feeds on compromise.
          Only your brand decides who wins.
        </p>
      </motion.div>
    </section>
  );
}
