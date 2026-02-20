'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import SectionTag from '@/components/ui/SectionTag';

const categories = ['All', 'Web', 'Branding', 'Marketing'] as const;

const projects = [
  {
    title: 'Apex Law Group',
    category: 'Web',
    gradient: 'from-purple-900 to-indigo-900',
    desc: 'Complete website redesign',
  },
  {
    title: 'Savora Kitchen',
    category: 'Branding',
    gradient: 'from-amber-900 to-orange-900',
    desc: 'Restaurant brand identity',
  },
  {
    title: 'TechVault Store',
    category: 'Web',
    gradient: 'from-cyan-900 to-blue-900',
    desc: 'E-commerce optimization',
  },
  {
    title: 'GreenPulse',
    category: 'Marketing',
    gradient: 'from-emerald-900 to-teal-900',
    desc: 'Startup launch campaign',
  },
  {
    title: 'Luminary Studios',
    category: 'Branding',
    gradient: 'from-rose-900 to-pink-900',
    desc: 'Creative agency rebrand',
  },
  {
    title: 'CloudNine SaaS',
    category: 'Marketing',
    gradient: 'from-violet-900 to-purple-900',
    desc: 'Social media strategy',
  },
];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const filtered =
    activeFilter === 'All'
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="portfolio" className="bg-brand-dark">
      <div className="section-container !pt-4 md:!pt-6">
        {/* Header */}
        <div className="text-center mb-12">
          <SectionTag>Our Work</SectionTag>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white">
            Designs That Deliver
          </h2>
          <p className="text-text-secondary text-lg mt-4">
            Selected projects that showcase our commitment to excellence.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex gap-2 justify-center mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all cursor-pointer ${
                activeFilter === cat
                  ? 'bg-brand-purple text-white'
                  : 'bg-white/5 text-text-secondary hover:text-white hover:bg-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {filtered.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="relative group rounded-2xl overflow-hidden aspect-[4/3] cursor-pointer"
              >
                {/* Background Gradient */}
                <div
                  className={`w-full h-full bg-gradient-to-br ${project.gradient}`}
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center">
                  <span className="text-brand-purple-light text-xs uppercase tracking-widest mb-2">
                    {project.category}
                  </span>
                  <h3 className="font-display font-bold text-xl text-white">
                    {project.title}
                  </h3>
                  <p className="text-text-secondary text-sm mt-2">
                    {project.desc}
                  </p>
                  <ArrowUpRight
                    size={24}
                    className="text-white mt-4 opacity-70 group-hover:opacity-100 transition-opacity"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
