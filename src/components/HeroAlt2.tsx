'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Button from '@/components/ui/Button';
import SectionTag from '@/components/ui/SectionTag';
import VideoBackground from '@/components/ui/VideoBackground';
import ParticleEffect from '@/components/ui/ParticleEffect';

export default function HeroAlt2() {
  return (
    <section
      id="home"
      className="h-screen relative flex items-center justify-center overflow-hidden"
    >
      {/* Video background — Seedance v2 */}
      <VideoBackground
        src="/videos/seedance-v2-hero.mp4"
        overlay={true}
      />

      {/* Particle overlay */}
      <ParticleEffect density="medium" colorScheme="purple" />

      {/* Dark overlay between video and text */}
      <div className="absolute inset-0 bg-black/45 z-[5]" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl text-center px-4">
        {/* Section tag */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <SectionTag color="purple">Pixels of Power</SectionTag>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="font-display font-extrabold text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white leading-tight"
        >
          We Defeat Your Deadline.
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mt-6"
        >
          Design without compromise. Built to outlast the rush.
        </motion.p>

        {/* Button group */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex gap-4 justify-center mt-8 flex-wrap"
        >
          <Button variant="secondary" href="#story">
            Meet the Heroes
          </Button>
          <Button
            variant="primary"
            href="#contact"
            icon={<ArrowRight size={18} />}
          >
            Defeat Your Deadline
          </Button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          className="text-white/50"
        >
          <path
            d="M12 5v14M5 12l7 7 7-7"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.div>
    </section>
  );
}
