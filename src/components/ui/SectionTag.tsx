import { ReactNode } from 'react';

type TagColor = 'purple' | 'red' | 'cyan' | 'gold';

interface SectionTagProps {
  children: ReactNode;
  color?: TagColor;
}

const colorStyles: Record<TagColor, string> = {
  purple: 'text-brand-purple-light',
  red: 'text-deadline',
  cyan: 'text-brand-cyan',
  gold: 'text-brand-gold',
};

export default function SectionTag({
  children,
  color = 'purple',
}: SectionTagProps) {
  return (
    <p
      className={`uppercase tracking-[0.2em] font-medium text-sm mb-4 ${colorStyles[color]}`}
    >
      {children}
    </p>
  );
}
