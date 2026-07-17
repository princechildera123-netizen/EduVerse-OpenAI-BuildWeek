import { DashboardSection, ProgressBar, SimpleList } from '../../shared-dashboard/components/DashboardPrimitives';
import type { PlannerSubject, RevisionReminder, StudyTask, WeeklyGoal } from '../types/studyPlanner';

export function SubjectPlannerControls({ subjects, selectedSubjectId, onChange }: { subjects: PlannerSubject[]; selectedSubjectId: string; onChange: (id: string) => void }) {
  const selected = subjects.find((subject) => subject.id === selectedSubjectId) ?? subjects[0];
  return <DashboardSection title="Planner inputs"><label className="grid gap-2 text-sm font-bold text-ink" htmlFor="planner-subject">Subject<select id="planner-subject" className="focus-ring min-h-12 rounded-2xl border border-slate-200 bg-white px-4" value={selectedSubjectId} onChange={(event) => onChange(event.target.value)}>{subjects.map((subject) => <option key={subject.id} value={subject.id}>{subject.name}</option>)}</select></label><dl className="mt-4 grid gap-3 text-sm"><div className="rounded-2xl bg-slate-50 p-4"><dt className="font-bold text-ink">Exam date</dt><dd className="text-muted">{selected.examDate}</dd></div><div className="rounded-2xl bg-slate-50 p-4"><dt className="font-bold text-ink">Daily available study time</dt><dd className="text-muted">{selected.availableMinutes} minutes</dd></div></dl></DashboardSection>;
}

export function StudyTimetable({ tasks, onToggle }: { tasks: StudyTask[]; onToggle: (id: string) => void }) {
  return <DashboardSection title="AI-generated study timetable"><div className="grid gap-3">{tasks.map((task) => <label key={task.id} className="focus-within:ring-brand flex items-start gap-3 rounded-2xl bg-slate-50 p-4"><input type="checkbox" className="mt-1 size-5 accent-brand" checked={task.completed} onChange={() => onToggle(task.id)} /><span><span className="font-bold text-ink">{task.day}: {task.title}</span><span className="block text-sm text-muted">{task.subject} • {task.minutes} minutes</span></span></label>)}</div></DashboardSection>;
}

export function WeeklyGoals({ goals }: { goals: WeeklyGoal[] }) {
  return <DashboardSection title="Weekly goals"><div className="grid gap-4">{goals.map((goal) => <ProgressBar key={goal.goal} label={goal.goal} value={goal.progress} />)}</div></DashboardSection>;
}

export function RevisionReminders({ reminders }: { reminders: RevisionReminder[] }) {
  return <DashboardSection title="Revision reminders"><SimpleList items={reminders.map((item) => ({ title: item.title, detail: `Due ${item.due}`, meta: 'Reminder' }))} /></DashboardSection>;
}
