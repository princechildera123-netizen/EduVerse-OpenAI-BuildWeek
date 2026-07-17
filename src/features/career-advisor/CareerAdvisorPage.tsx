import { DashboardHero, DashboardSection } from '../shared-dashboard/components/DashboardPrimitives';
import { CareerMatchCard, CareerProfileCard, RoadmapTimeline } from './components/CareerAdvisorCards';
import { useCareerAdvisor } from './hooks/useCareerAdvisor';

export function CareerAdvisorPage() {
  const data = useCareerAdvisor();
  return <div className="py-8 sm:py-12"><DashboardHero eyebrow="AI Career & University Advisor" title="Plan the pathway from school to career." description="Explore mock career recommendations based on subjects, interests, skills, personality, and academic performance." /><div className="mt-6 grid gap-6 lg:grid-cols-[22rem_1fr]"><CareerProfileCard profile={data.profile} /><main className="grid gap-6"><DashboardSection title="Best career matches"><div className="grid gap-4">{data.matches.map((match) => <CareerMatchCard key={match.title} match={match} />)}</div></DashboardSection><RoadmapTimeline steps={data.roadmap} /></main></div></div>;
}
