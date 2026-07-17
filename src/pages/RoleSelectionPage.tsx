import { motion } from 'framer-motion';
import { roles } from '../data/roles';
import { ButtonLink } from '../components/ui/Button';
import { Link } from 'react-router-dom';

export function RoleSelectionPage() {
  return (
    <div className="py-10 sm:py-16">
      <section className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-semibold text-brand">Role selection</p>
        <h1 className="mt-3 text-4xl font-black tracking-tight text-ink sm:text-5xl">Choose how you will use EduVerse AI.</h1>
        <p className="mt-4 text-lg leading-8 text-muted">This foundation prepares clear onboarding paths without implementing dashboards, backend logic, or AI features yet.</p>
      </section>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {roles.map((role, index) => (
          <motion.article
            key={role.id}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.07 }}
            className="group rounded-3xl border border-white/80 bg-white/80 p-5 shadow-xl shadow-slate-200/60 transition hover:-translate-y-1 hover:shadow-2xl"
          >
            <div className={`mb-5 size-14 rounded-3xl bg-gradient-to-br ${role.accent}`} aria-hidden="true" />
            <h2 className="text-xl font-black text-ink">{role.title}</h2>
            <p className="mt-3 min-h-24 text-sm leading-6 text-muted">{role.description}</p>
            {role.id === 'student' ? (
              <Link to="/dashboard" className="focus-ring mt-6 block w-full rounded-full border border-slate-200 bg-white px-4 py-3 text-center text-sm font-bold text-brand transition group-hover:border-brand/40">
                Select {role.title}
              </Link>
            ) : (
              <button type="button" className="focus-ring mt-6 w-full rounded-full border border-slate-200 bg-white px-4 py-3 text-sm font-bold text-brand transition group-hover:border-brand/40">
                Select {role.title}
              </button>
            )}
          </motion.article>
        ))}
      </div>
      <div className="mt-10 text-center"><ButtonLink to="/signup">Continue to signup</ButtonLink></div>
    </div>
  );
}
