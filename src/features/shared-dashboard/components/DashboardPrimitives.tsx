import type { ReactNode } from 'react';

export function DashboardHero({ eyebrow, title, description, children }: { eyebrow: string; title: string; description: string; children?: ReactNode }) {
  return <section className="rounded-[2rem] bg-gradient-to-br from-brand to-aqua p-6 text-white shadow-2xl shadow-brand/20 sm:p-8"><p className="font-semibold text-white/80">{eyebrow}</p><h1 className="mt-2 text-4xl font-black sm:text-5xl">{title}</h1><p className="mt-4 max-w-3xl text-white/85">{description}</p>{children}</section>;
}

export function DashboardSection({ title, children, className = '' }: { title: string; children: ReactNode; className?: string }) {
  return <section className={`rounded-3xl border border-white/70 bg-white/80 p-5 shadow-xl shadow-slate-200/60 ${className}`}><h2 className="text-xl font-black text-ink">{title}</h2><div className="mt-4">{children}</div></section>;
}

export function MetricCard({ label, value, detail }: { label: string; value: string; detail: string }) {
  return <article className="rounded-3xl bg-white/85 p-5 shadow-xl shadow-slate-200/60"><p className="text-sm font-semibold text-muted">{label}</p><strong className="mt-2 block text-3xl text-ink">{value}</strong><p className="mt-2 text-sm text-muted">{detail}</p></article>;
}

export function ActionCard({ title, description }: { title: string; description: string }) {
  return <button type="button" className="focus-ring w-full rounded-2xl border border-brand/15 bg-brand/5 p-4 text-left transition hover:-translate-y-0.5 hover:bg-brand/10"><span className="font-bold text-brand">{title}</span><span className="mt-1 block text-sm text-muted">{description}</span></button>;
}

export function SimpleList({ items }: { items: { title: string; detail: string; meta?: string }[] }) {
  return <div className="grid gap-3">{items.map((item) => <article key={`${item.title}-${item.detail}`} className="rounded-2xl bg-slate-50 p-4"><div className="flex items-start justify-between gap-3"><div><h3 className="font-bold text-ink">{item.title}</h3><p className="mt-1 text-sm text-muted">{item.detail}</p></div>{item.meta && <span className="rounded-full bg-white px-3 py-1 text-xs font-bold text-brand">{item.meta}</span>}</div></article>)}</div>;
}

export function ProgressBar({ label, value }: { label: string; value: number }) {
  return <div><div className="flex justify-between text-sm"><span className="font-bold text-ink">{label}</span><span className="font-bold text-brand">{value}%</span></div><div className="mt-2 h-3 rounded-full bg-slate-100"><div className="h-full rounded-full bg-gradient-to-r from-brand to-aqua" style={{ width: `${value}%` }} /></div></div>;
}
