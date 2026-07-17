import { DashboardHero, DashboardSection, ProgressBar } from '../shared-dashboard/components/DashboardPrimitives';
import { RevisionReminders, StudyTimetable, SubjectPlannerControls, WeeklyGoals } from './components/StudyPlannerCards';
import { useStudyPlanner } from './hooks/useStudyPlanner';

export function StudyPlannerPage() {
  const planner = useStudyPlanner();
  const completed = planner.tasks.filter((task) => task.completed).length;
  const progress = Math.round((completed / planner.tasks.length) * 100);
  return <div className="py-8 sm:py-12"><DashboardHero eyebrow="Smart Study Planner" title="Turn exams into a daily plan." description="Use mock AI planning inputs to organize subjects, exam dates, available study time, tasks, goals, reminders, and progress." /><div className="mt-6 grid gap-6 lg:grid-cols-[22rem_1fr]"><aside className="grid content-start gap-6"><SubjectPlannerControls subjects={planner.subjects} selectedSubjectId={planner.selectedSubjectId} onChange={planner.setSelectedSubjectId} /><RevisionReminders reminders={planner.revisionReminders} /><DashboardSection title="Progress updates"><ProgressBar label={`${completed} of ${planner.tasks.length} tasks complete`} value={progress} /></DashboardSection></aside><main className="grid gap-6"><StudyTimetable tasks={planner.tasks} onToggle={planner.toggleTask} /><WeeklyGoals goals={planner.weeklyGoals} /></main></div></div>;
}
