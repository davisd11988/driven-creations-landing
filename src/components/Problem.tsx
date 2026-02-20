'use client';

import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';
import SectionTag from '@/components/ui/SectionTag';

const stats = [
  {
    value: '72%',
    description: 'of brands blend in because Deadline forced a shortcut',
  },
  {
    value: '3 sec',
    description: "That's all Deadline gives you before visitors bounce",
  },
  {
    value: '2x',
    description: 'the cost to undo what Deadline convinced you to ship',
  },
];

export default function Problem() {
  return (
    <section
      id="problem"
      className="relative bg-gradient-to-b from-brand-dark to-brand-bg-purple"
    >
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column - content */}
          <div>
            <SectionTag color="red">The Villain You Already Know</SectionTag>

            <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-6">
              Deadline Is Winning.
            </h2>

            <p className="text-text-secondary text-lg mb-10">
              Every corner you cut, every template you settle for, every
              &ldquo;good enough&rdquo; design that ships — that&apos;s Deadline
              winning. And your brand pays the price.
            </p>

            {/* Stat cards */}
            <div className="flex flex-col gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.value}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="glass rounded-xl p-5 border-l-4 border-deadline"
                >
                  <div className="font-display font-bold text-3xl text-deadline">
                    {stat.value}
                  </div>
                  <p className="text-text-secondary text-sm mt-1">
                    {stat.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right column - Deadline villain visual */}
          <div className="flex items-center justify-center">
            <motion.div
              animate={{
                scale: [1, 1.03, 1],
                opacity: [0.8, 1, 0.8],
              }}
              transition={{
                repeat: Infinity,
                duration: 3,
                ease: 'easeInOut',
              }}
              className="relative glass rounded-2xl p-8 glow-red w-full max-w-md"
            >
              {/* Red radial glow behind */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-80 h-80 bg-gradient-radial from-deadline/20 to-transparent rounded-full blur-3xl" />
              </div>

              {/* Icon and text */}
              <div className="relative z-10 flex flex-col items-center justify-center py-12">
                <Zap size={80} className="text-deadline opacity-80" />
                <p className="font-display font-bold text-2xl text-deadline/80 tracking-widest mt-6">
                  DEADLINE
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
