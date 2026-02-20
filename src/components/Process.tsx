'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Search, Map, Paintbrush, Sparkles, Rocket } from 'lucide-react';
import SectionTag from '@/components/ui/SectionTag';

const steps = [
  {
    number: '01',
    title: 'DISCOVER',
    desc: 'We learn your goals, audience, and competition.',
    icon: Search,
  },
  {
    number: '02',
    title: 'STRATEGIZE',
    desc: 'We map the path to your objectives.',
    icon: Map,
  },
  {
    number: '03',
    title: 'CREATE',
    desc: 'We design and build with precision.',
    icon: Paintbrush,
  },
  {
    number: '04',
    title: 'REFINE',
    desc: 'We polish until it\u0027s perfect.',
    icon: Sparkles,
  },
  {
    number: '05',
    title: 'LAUNCH',
    desc: 'We deploy and celebrate together.',
    icon: Rocket,
  },
];

export default function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const lineWidth = useTransform(scrollYProgress, [0.2, 0.8], ['0%', '100%']);

  return (
    <section
      id="process"
      ref={containerRef}
      className="bg-gradient-to-b from-brand-dark to-brand-bg-purple"
    >
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16">
          <SectionTag>How We Work</SectionTag>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white">
            From Vision to Victory
          </h2>
        </div>

        {/* Desktop layout */}
        <div className="hidden md:flex items-start justify-between gap-4 relative">
          {/* Connecting line (background) */}
          <div className="absolute top-8 left-[10%] right-[10%] h-[2px] bg-white/10" />

          {/* Progress overlay on the line */}
          <motion.div
            className="absolute top-8 left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-brand-purple to-brand-cyan origin-left"
            style={{ scaleX: lineWidth, transformOrigin: 'left' }}
          />

          {steps.map((step, i) => {
            const Icon = step.icon;
            const threshold = i / (steps.length - 1);

            return (
              <DesktopStep
                key={step.number}
                step={step}
                Icon={Icon}
                threshold={threshold}
                scrollYProgress={scrollYProgress}
              />
            );
          })}
        </div>

        {/* Mobile layout */}
        <div className="block md:hidden relative">
          {/* Vertical line background */}
          <div className="absolute left-8 top-0 bottom-0 w-[2px] bg-white/10" />

          {/* Vertical line progress */}
          <motion.div
            className="absolute left-8 top-0 bottom-0 w-[2px] bg-gradient-to-b from-brand-purple to-brand-cyan origin-top"
            style={{ scaleY: lineWidth, transformOrigin: 'top' }}
          />

          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex gap-4 mb-8 relative"
              >
                {/* Circle */}
                <div className="w-16 h-16 rounded-full flex items-center justify-center shrink-0 bg-white/5 border border-white/10 z-10">
                  <Icon size={24} className="text-text-muted" />
                </div>

                {/* Content */}
                <div className="pt-1">
                  <p className="text-xs text-text-muted uppercase tracking-widest">
                    Step {step.number}
                  </p>
                  <h3 className="font-display font-bold text-sm text-white mt-1">
                    {step.title}
                  </h3>
                  <p className="text-text-secondary text-xs mt-1">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* Desktop step sub-component that reads scroll progress */
function DesktopStep({
  step,
  Icon,
  threshold,
  scrollYProgress,
}: {
  step: (typeof steps)[number];
  Icon: React.ComponentType<{ size?: number; className?: string }>;
  threshold: number;
  scrollYProgress: ReturnType<typeof useScroll>['scrollYProgress'];
}) {
  // Map the scroll progress to determine if this step is active
  // The line progresses from 0.2 to 0.8 of scrollYProgress,
  // so each step activates proportionally within that range
  const activationPoint = 0.2 + threshold * 0.6;
  const isActiveMotion = useTransform(
    scrollYProgress,
    [activationPoint - 0.05, activationPoint],
    [0, 1]
  );

  const bgColor = useTransform(isActiveMotion, (v) =>
    v > 0.5 ? 'rgba(124, 58, 237, 1)' : 'rgba(255, 255, 255, 0.05)'
  );

  const iconColor = useTransform(isActiveMotion, (v) =>
    v > 0.5 ? '#ffffff' : '#71717a'
  );

  const boxShadowVal = useTransform(isActiveMotion, (v) =>
    v > 0.5 ? '0 0 30px rgba(124, 58, 237, 0.3)' : 'none'
  );

  const borderColor = useTransform(isActiveMotion, (v) =>
    v > 0.5 ? 'rgba(124, 58, 237, 0)' : 'rgba(255, 255, 255, 0.1)'
  );

  return (
    <div className="flex flex-col items-center text-center relative z-10 w-1/5">
      <motion.div
        className="w-16 h-16 rounded-full flex items-center justify-center transition-all duration-500"
        style={{
          backgroundColor: bgColor,
          boxShadow: boxShadowVal,
          border: useTransform(borderColor, (c) => `1px solid ${c}`),
        }}
      >
        <motion.div style={{ color: iconColor }}>
          <Icon size={24} />
        </motion.div>
      </motion.div>
      <p className="text-xs text-text-muted mt-3 uppercase tracking-widest">
        Step {step.number}
      </p>
      <h3 className="font-display font-bold text-sm text-white mt-1">
        {step.title}
      </h3>
      <p className="text-text-secondary text-xs mt-1 max-w-[140px]">
        {step.desc}
      </p>
    </div>
  );
}
