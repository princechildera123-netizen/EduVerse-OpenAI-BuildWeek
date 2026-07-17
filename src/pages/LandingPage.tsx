import { motion } from 'framer-motion';
import { ButtonLink } from '../components/ui/Button';
import { Card } from '../components/ui/Card';

const highlights = ['Role-aware onboarding', 'Accessible mobile-first UI', 'Ready for future AI workflows'];

export function LandingPage() {
  return (
    <div className="grid min-h-[calc(100vh-7rem)] items-center gap-10 py-8 lg:grid-cols-[1.05fr_0.95fr] lg:py-16">
      <section className="max-w-3xl">
        <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="mb-4 inline-flex rounded-full border border-brand/15 bg-white/70 px-4 py-2 text-sm font-semibold text-brand">
          OpenAI Build Week 2026 foundation
        </motion.p>
        <h1 className="text-5xl font-black tracking-tight text-ink sm:text-6xl lg:text-7xl">A beautiful learning universe starts here.</h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">EduVerse AI is a production-ready front-end foundation for students, teachers, families, and school leaders—designed for clarity before any AI, backend, or dashboard features are added.</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <ButtonLink to="/signup">Create an account</ButtonLink>
          <ButtonLink to="/roles" variant="secondary">Choose your role</ButtonLink>
        </div>
        <ul className="mt-8 grid gap-3 text-sm font-medium text-muted sm:grid-cols-3">
          {highlights.map((item) => <li key={item} className="rounded-2xl bg-white/70 p-4 shadow-sm">{item}</li>)}
        </ul>
      </section>
      <Card className="relative mx-auto w-full max-w-xl p-5 sm:p-8">
        <div className="absolute -right-10 -top-10 size-32 rounded-full bg-aqua/20 blur-2xl" />
        <div className="grid gap-4">
          {['Student growth', 'Teacher planning', 'Family connection', 'School visibility'].map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.08 }}
              className="rounded-3xl border border-slate-100 bg-white p-5 shadow-sm"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="font-bold text-ink">{item}</span>
                <span className="rounded-full bg-slate-50 px-3 py-1 text-xs font-semibold text-brand">Ready</span>
              </div>
              <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-100"><div className="h-full w-2/3 rounded-full bg-gradient-to-r from-brand to-aqua" /></div>
            </motion.div>
          ))}
        </div>
      </Card>
    </div>
  );
}
