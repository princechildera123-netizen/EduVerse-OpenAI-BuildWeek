import type { ComponentPropsWithoutRef } from 'react';

export function Card({ className = '', ...props }: ComponentPropsWithoutRef<'section'>) {
  return <section className={`rounded-3xl border border-white/70 bg-white/75 p-6 shadow-xl shadow-slate-200/60 backdrop-blur ${className}`} {...props} />;
}
