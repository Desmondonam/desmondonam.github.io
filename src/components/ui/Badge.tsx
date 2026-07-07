import type { ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  tone?: 'accent' | 'gold';
}

export default function Badge({ children, tone = 'accent' }: BadgeProps) {
  const toneClasses =
    tone === 'gold'
      ? 'border-gold/30 bg-gold/10 text-gold'
      : 'border-accent/25 bg-accent/10 text-accent-soft';

  return (
    <span
      className={`inline-block rounded-sm border px-2.5 py-1 font-mono text-[10px] tracking-wide ${toneClasses}`}
    >
      {children}
    </span>
  );
}
