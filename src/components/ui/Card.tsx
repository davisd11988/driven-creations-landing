'use client';

import { ReactNode, useState } from 'react';
import { motion } from 'framer-motion';

type GlowColor = 'purple' | 'red' | 'cyan' | 'gold';

interface CardProps {
  children: ReactNode;
  glowColor?: GlowColor;
  className?: string;
  hoverable?: boolean;
}

const glowShadows: Record<GlowColor, string> = {
  purple: '0 8px 40px rgba(124, 58, 237, 0.4)',
  red: '0 8px 40px rgba(239, 68, 68, 0.4)',
  cyan: '0 8px 40px rgba(34, 211, 238, 0.4)',
  gold: '0 8px 40px rgba(251, 191, 36, 0.4)',
};

export default function Card({
  children,
  glowColor = 'purple',
  className = '',
  hoverable = false,
}: CardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const baseStyles = 'glass rounded-2xl p-6 md:p-8 transition-all duration-300';

  if (!hoverable) {
    return (
      <div className={`${baseStyles} ${className}`}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      className={`${baseStyles} ${className}`}
      whileHover={{ y: -4 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      style={{
        boxShadow: isHovered ? glowShadows[glowColor] : 'none',
      }}
    >
      {children}
    </motion.div>
  );
}
