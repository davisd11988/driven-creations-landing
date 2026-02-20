'use client';

import { useState, useEffect, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import SectionTag from '@/components/ui/SectionTag';

const testimonials = [
  {
    quote:
      'Driven Creations transformed our online presence. The attention to detail was unmatched.',
    author: 'Sarah Chen',
    company: 'TechFlow Inc.',
    role: 'CEO',
  },
  {
    quote:
      'The team understood our vision immediately and delivered beyond our wildest expectations.',
    author: 'Marcus Johnson',
    company: 'Elevate Brands',
    role: 'Founder',
  },
  {
    quote:
      'Best investment we made for our brand. Our conversions increased by 40% in the first month.',
    author: 'Lisa Park',
    company: 'GreenLeaf Co.',
    role: 'Marketing Director',
  },
];

const logos = [
  'TechFlow',
  'Elevate',
  'GreenLeaf',
  'Nexus',
  'Prism',
  'Catalyst',
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const advance = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(advance, 5000);
    return () => clearInterval(interval);
  }, [isPaused, advance]);

  return (
    <section id="testimonials" className="bg-brand-dark">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-12">
          <SectionTag>What They Say</SectionTag>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white">
            Client Stories
          </h2>
        </div>

        {/* Carousel */}
        <div
          className="max-w-3xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="text-center"
            >
              {/* Quotation mark */}
              <div className="text-brand-purple text-6xl mb-4 leading-none font-serif">
                &ldquo;
              </div>

              {/* Quote */}
              <p className="text-xl md:text-2xl text-white font-light leading-relaxed italic">
                {testimonials[current].quote}
              </p>

              {/* Author */}
              <div className="flex items-center justify-center gap-3 mt-8">
                {/* Avatar placeholder */}
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-purple to-brand-cyan shrink-0" />
                <div className="text-left">
                  <p className="font-display font-semibold text-white">
                    {testimonials[current].author}
                  </p>
                  <p className="text-text-secondary text-sm">
                    {testimonials[current].role},{' '}
                    {testimonials[current].company}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation dots */}
          <div className="flex gap-2 justify-center mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === current
                    ? 'w-8 bg-brand-purple'
                    : 'w-2 bg-white/20 hover:bg-white/40'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Logo marquee */}
        <div className="mt-16">
          <p className="text-text-muted text-sm uppercase tracking-widest text-center mb-6">
            Trusted By
          </p>

          <div className="overflow-hidden relative">
            {/* Left fade */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-brand-dark to-transparent z-10 pointer-events-none" />
            {/* Right fade */}
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-brand-dark to-transparent z-10 pointer-events-none" />

            <div className="flex gap-12 animate-marquee">
              {/* First set */}
              {logos.map((name) => (
                <span
                  key={`a-${name}`}
                  className="text-text-muted/40 font-display font-bold text-xl whitespace-nowrap"
                >
                  {name}
                </span>
              ))}
              {/* Duplicate set for seamless loop */}
              {logos.map((name) => (
                <span
                  key={`b-${name}`}
                  className="text-text-muted/40 font-display font-bold text-xl whitespace-nowrap"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
