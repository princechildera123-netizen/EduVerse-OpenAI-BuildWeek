import { DashboardSection, ProgressBar, SimpleList } from '../../shared-dashboard/components/DashboardPrimitives';
import type { CareerMatch, CareerProfile, CareerRoadmapStep } from '../types/careerAdvisor';

export function CareerProfileCard({ profile }: { profile: CareerProfile }) {
  const items = [
    { title: 'Subjects', detail: profile.subjects.join(', ') },
    { title: 'Interests', detail: profile.interests.join(', ') },
    { title: 'Skills', detail: profile.skills.join(', ') },
    { title: 'Personality', detail: profile.personality },
    { title: 'Academic performance', detail: profile.academicPerformance },
  ];
  return <DashboardSection title="Student career profile"><SimpleList items={items} /></DashboardSection>;
}

export function CareerMatchCard({ match }: { match: CareerMatch }) {
  return <article className="rounded-3xl bg-white p-5 shadow-sm"><div className="flex items-start justify-between gap-4"><div><h3 className="text-xl font-black text-ink">{match.title}</h3><p className="mt-2 text-sm text-muted">{match.reason}</p></div><span className="rounded-full bg-brand/10 px-3 py-1 text-sm font-black text-brand">{match.match}%</span></div><div className="mt-4"><ProgressBar label="Career match" value={match.match} /></div><dl className="mt-4 grid gap-3 text-sm sm:grid-cols-2"><div><dt className="font-bold text-ink">Future salary estimate</dt><dd className="text-muted">{match.salary}</dd></div><div><dt className="font-bold text-ink">Job growth outlook</dt><dd className="text-muted">{match.growth}</dd></div><div><dt className="font-bold text-ink">University courses</dt><dd className="text-muted">{match.courses.join(', ')}</dd></div><div><dt className="font-bold text-ink">Required skills</dt><dd className="text-muted">{match.requiredSkills.join(', ')}</dd></div></dl></article>;
}

export function RoadmapTimeline({ steps }: { steps: CareerRoadmapStep[] }) {
  return <DashboardSection title="Secondary school to career roadmap"><div className="grid gap-3">{steps.map((step, index) => <article key={step.stage} className="rounded-2xl bg-slate-50 p-4"><p className="text-xs font-bold uppercase tracking-wide text-brand">Step {index + 1} • {step.stage}</p><h3 className="mt-1 font-bold text-ink">{step.action}</h3><p className="mt-1 text-sm text-muted">{step.outcome}</p></article>)}</div></DashboardSection>;
}
