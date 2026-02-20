'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  onClick?: () => void;
  className?: string;
  icon?: ReactNode;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-brand-purple hover:bg-brand-purple-dark text-white hover:shadow-[0_0_25px_rgba(124,58,237,0.5)]',
  secondary:
    'bg-transparent border-2 border-white/80 text-white hover:bg-white hover:text-brand-bg-purple',
  outline:
    'border border-brand-purple/50 text-brand-purple-light hover:border-brand-purple',
  ghost: 'text-white/70 hover:text-white',
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'h-9 px-4 text-sm',
  md: 'h-11 px-6 text-base',
  lg: 'h-13 px-8 text-lg',
};

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className = '',
  icon,
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-300 cursor-pointer';
  const classes = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  const content = (
    <>
      {icon}
      {children}
    </>
  );

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className="inline-block"
    >
      {href ? (
        <a href={href} className={classes}>
          {content}
        </a>
      ) : (
        <button onClick={onClick} className={classes}>
          {content}
        </button>
      )}
    </motion.div>
  );
}
