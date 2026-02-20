'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { Play, Bot, Flame, Crown } from 'lucide-react';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import SectionTag from '@/components/ui/SectionTag';

const characters = [
  {
    name: 'DRIVE',
    role: 'The Hero',
    desc: 'Born from the first pixel of Creativity City. Drive exists for one purpose — to destroy Deadline and prove that great design never has to be rushed.',
    icon: Bot,
    iconColor: 'text-drive',
    iconBg: 'bg-gradient-to-br from-drive/20 to-transparent',
    roleColor: 'text-drive',
    glowColor: 'purple' as const,
  },
  {
    name: 'DEADLINE',
    role: 'The Villain',
    desc: 'The force behind every rushed launch and every "just ship it" decision. Deadline turns vision into compromise — unless someone stops him.',
    icon: Flame,
    iconColor: 'text-deadline',
    iconBg: 'bg-gradient-to-br from-deadline/20 to-transparent',
    roleColor: 'text-deadline',
    glowColor: 'red' as const,
  },
  {
    name: 'DR. DERRICK',
    role: 'The Creator',
    desc: 'The architect of the resistance. Dr. Derrick built Drive and Driven Creations to prove that quality always wins the long game.',
    icon: Crown,
    iconColor: 'text-brand-gold',
    iconBg: 'bg-gradient-to-br from-brand-gold/20 to-transparent',
    roleColor: 'text-brand-gold',
    glowColor: 'gold' as const,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' as const },
  },
};

export default function Story() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section
      id="story"
      ref={sectionRef}
      className="bg-gradient-to-b from-brand-bg-purple to-brand-dark"
    >
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-12">
          <SectionTag>The Animated Series</SectionTag>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white">
            Pixels of Power: The Chronicles of Drive
          </h2>
          <p className="text-text-secondary text-lg mt-4 max-w-2xl mx-auto">
            The battle between quality and chaos isn&apos;t just a metaphor — it&apos;s
            a war. Watch how Drive defeats Deadline one pixel at a time.
          </p>
        </div>

        {/* Video Embed */}
        <div className="mb-12">
          <div className="relative aspect-video max-w-4xl mx-auto rounded-2xl overflow-hidden border border-white/10 glow-purple">
            <div className="absolute inset-0 bg-brand-bg-purple" />
            <Image
              src="/images/drive_deadline_gradient_poster.jpg"
              alt="Pixels of Power animated series poster"
              className="relative w-full h-full object-cover opacity-60"
              fill
              sizes="(max-width: 768px) 100vw, 896px"
            />

            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <div className="relative">
                {/* Pulsing ring */}
                <motion.div
                  className="absolute inset-0 rounded-full bg-brand-purple/30"
                  animate={{ scale: [1, 1.3, 1], opacity: [0.6, 0, 0.6] }}
                  transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
                />
                {/* Play circle */}
                <div className="relative w-20 h-20 rounded-full bg-brand-purple/80 backdrop-blur flex items-center justify-center cursor-pointer hover:bg-brand-purple transition-colors duration-300">
                  <Play size={32} className="text-white fill-white ml-1" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Character Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {characters.map((character) => {
            const IconComponent = character.icon;
            return (
              <motion.div key={character.name} variants={cardVariants}>
                <Card glowColor={character.glowColor} hoverable className="text-center">
                  <div
                    className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto ${character.iconBg}`}
                  >
                    <IconComponent size={40} className={character.iconColor} />
                  </div>
                  <h3 className="font-display font-bold text-lg text-white">
                    {character.name}
                  </h3>
                  <p className={`text-sm ${character.roleColor} mb-2`}>
                    {character.role}
                  </p>
                  <p className="text-text-secondary text-sm">{character.desc}</p>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA Buttons */}
        <div className="flex gap-4 justify-center mt-10">
          <Button variant="primary">Watch Episode 1</Button>
          <Button variant="outline">Behind the Scenes</Button>
        </div>
      </div>
    </section>
  );
}
