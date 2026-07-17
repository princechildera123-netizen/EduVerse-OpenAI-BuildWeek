import { Outlet } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ButtonLink } from '../ui/Button';

export function AppShell() {
  return (
    <div className="min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(91,95,240,0.18),transparent_32rem),radial-gradient(circle_at_85%_15%,rgba(25,198,192,0.16),transparent_24rem),#f8fbff]">
      <header className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 sm:px-6 lg:px-8" aria-label="Primary navigation">
        <ButtonLink to="/" variant="ghost" className="gap-2 px-2 text-ink" aria-label="EduVerse AI home">
          <span className="grid size-9 place-items-center rounded-2xl bg-brand text-white shadow-lg shadow-brand/30">E</span>
          <span className="text-base font-bold">EduVerse AI</span>
        </ButtonLink>
        <nav className="flex items-center gap-2" aria-label="Student and account navigation">
          <ButtonLink to="/dashboard" variant="ghost" className="hidden lg:inline-flex">Dashboard</ButtonLink>
          <ButtonLink to="/learning-twin" variant="ghost" className="hidden lg:inline-flex">Learning Twin</ButtonLink>
          <ButtonLink to="/exam-predictor" variant="ghost" className="hidden xl:inline-flex">Exam Predictor</ButtonLink>
          <ButtonLink to="/study-coach" variant="ghost" className="hidden xl:inline-flex">Study Coach</ButtonLink>
          <ButtonLink to="/login" variant="ghost" className="hidden sm:inline-flex">Log in</ButtonLink>
          <ButtonLink to="/signup" variant="primary">Get started</ButtonLink>
        </nav>
      </header>
      <motion.main
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
        className="mx-auto w-full max-w-7xl px-4 pb-12 sm:px-6 lg:px-8"
      >
        <Outlet />
      </motion.main>
    </div>
  );
}
