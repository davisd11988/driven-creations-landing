'use client';

import { motion, Variants } from 'framer-motion';
import { Code, Palette, Megaphone } from 'lucide-react';
import SectionTag from '@/components/ui/SectionTag';
import Card from '@/components/ui/Card';

const services = [
  {
    icon: Code,
    title: 'Web Design & Development',
    description:
      'Deadline wants you to ship a template. We build custom sites that make visitors stop scrolling and start converting.',
  },
  {
    icon: Palette,
    title: 'Branding & Identity',
    description:
      'Generic marks are Deadline\u2019s fingerprint. We craft brand systems that are impossible to ignore and impossible to copy.',
  },
  {
    icon: Megaphone,
    title: 'Digital Marketing',
    description:
      'Deadline buries your brand in noise. We cut through it with strategies that put you exactly where your audience is looking.',
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export default function Services() {
  return (
    <section id="services" className="bg-brand-dark">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16">
          <SectionTag>How We Fight Back</SectionTag>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white">
            The Arsenal That Defeats Deadline
          </h2>
          <p className="text-text-secondary text-lg mt-4 max-w-2xl mx-auto">
            Three superpowers forged to destroy rushed work and
            replace it with something your audience actually remembers.
          </p>
        </div>

        {/* Service cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div key={service.title} variants={cardVariants}>
                <Card glowColor="purple" hoverable>
                  {/* Icon container */}
                  <div className="w-14 h-14 rounded-xl bg-brand-purple/20 flex items-center justify-center mb-6">
                    <Icon size={28} className="text-brand-purple-light" />
                  </div>

                  {/* Title */}
                  <h3 className="font-display font-bold text-xl text-white mb-3">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {service.description}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
