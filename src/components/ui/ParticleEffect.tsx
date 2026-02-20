'use client';

import { useMemo } from 'react';
import { motion } from 'framer-motion';

type Density = 'low' | 'medium' | 'high';
type ColorScheme = 'purple' | 'mixed';

interface ParticleEffectProps {
  density?: Density;
  colorScheme?: ColorScheme;
}

const densityCount: Record<Density, number> = {
  low: 8,
  medium: 15,
  high: 25,
};

const purpleColors = ['#7c3aed', '#a78bfa', '#8b5cf6', '#6d28d9', '#c4b5fd'];
const mixedColors = ['#7c3aed', '#a78bfa', '#22d3ee', '#fbbf24', '#8b5cf6', '#67e8f9', '#fcd34d'];

function seededRandom(seed: number): () => number {
  let s = seed;
  return () => {
    s = (s * 16807) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

export default function ParticleEffect({
  density = 'medium',
  colorScheme = 'mixed',
}: ParticleEffectProps) {
  const particles = useMemo(() => {
    const count = densityCount[density];
    const colors = colorScheme === 'purple' ? purpleColors : mixedColors;
    const rand = seededRandom(42);

    return Array.from({ length: count }, (_, i) => {
      const size = 2 + rand() * 4;
      const opacity = 0.1 + rand() * 0.3;
      const duration = 4 + rand() * 6;
      const delay = rand() * 5;
      const yTravel = 20 + rand() * 40;
      const endOpacity = Math.max(0.05, opacity - 0.1 + rand() * 0.2);

      return {
        id: i,
        top: `${rand() * 100}%`,
        left: `${rand() * 100}%`,
        size,
        color: colors[Math.floor(rand() * colors.length)],
        opacity,
        endOpacity,
        duration,
        delay,
        yTravel,
      };
    });
  }, [density, colorScheme]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            top: particle.top,
            left: particle.left,
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
          }}
          animate={{
            y: [0, -particle.yTravel, 0],
            opacity: [particle.opacity, particle.endOpacity, particle.opacity],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: particle.delay,
          }}
        />
      ))}
    </div>
  );
}
