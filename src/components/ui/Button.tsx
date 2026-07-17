import { Link } from 'react-router-dom';
import type { ComponentPropsWithoutRef, ReactNode } from 'react';

type ButtonProps = ComponentPropsWithoutRef<'button'> & {
  variant?: 'primary' | 'secondary' | 'ghost';
};

type ButtonLinkProps = ComponentPropsWithoutRef<typeof Link> & {
  variant?: ButtonProps['variant'];
  children: ReactNode;
};

const variants = {
  primary: 'bg-brand text-white shadow-lg shadow-brand/25 hover:bg-brand-dark',
  secondary: 'border border-slate-200 bg-white/80 text-ink shadow-sm hover:border-brand/30 hover:bg-white',
  ghost: 'text-muted hover:bg-slate-100 hover:text-ink',
};

const base = 'focus-ring inline-flex min-h-11 items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold transition';

export function Button({ className = '', variant = 'primary', ...props }: ButtonProps) {
  return <button className={`${base} ${variants[variant]} ${className}`} {...props} />;
}

export function ButtonLink({ className = '', variant = 'primary', ...props }: ButtonLinkProps) {
  return <Link className={`${base} ${variants[variant]} ${className}`} {...props} />;
}
