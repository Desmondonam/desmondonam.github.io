import type { AnchorHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  variant?: 'primary' | 'outline';
}

export default function Button({ children, variant = 'primary', className = '', ...rest }: ButtonProps) {
  const base =
    'inline-flex items-center gap-2 rounded-sm px-7 py-3 font-mono text-xs uppercase tracking-wider transition-all duration-200';
  const variants =
    variant === 'primary'
      ? 'bg-accent text-navy-950 font-medium hover:bg-white hover:shadow-[0_0_30px_rgba(59,130,246,0.4)]'
      : 'border border-navy-600 text-navy-400 hover:border-accent hover:text-accent-soft';

  return (
    <a className={`${base} ${variants} ${className}`} {...rest}>
      {children}
    </a>
  );
}
