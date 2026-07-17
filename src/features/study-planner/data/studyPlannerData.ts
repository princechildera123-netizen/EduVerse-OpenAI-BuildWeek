import type { PlannerSubject, RevisionReminder, StudyTask, WeeklyGoal } from '../types/studyPlanner';

export const plannerSubjects: PlannerSubject[] = [
  { id: 'algebra', name: 'Algebra II', examDate: '2026-08-14', availableMinutes: 45 },
  { id: 'biology', name: 'Biology', examDate: '2026-08-20', availableMinutes: 35 },
  { id: 'history', name: 'World History', examDate: '2026-08-23', availableMinutes: 30 },
];
export const studyTasks: StudyTask[] = [
  { id: 'task-1', day: 'Monday', subject: 'Algebra II', title: 'Graph quadratic functions', minutes: 25, completed: true },
  { id: 'task-2', day: 'Tuesday', subject: 'Biology', title: 'Review cell transport diagrams', minutes: 30, completed: false },
  { id: 'task-3', day: 'Wednesday', subject: 'World History', title: 'Create timeline for unit 3', minutes: 25, completed: false },
];
export const weeklyGoals: WeeklyGoal[] = [
  { goal: 'Complete three algebra practice sets', progress: 67 },
  { goal: 'Review biology vocabulary twice', progress: 50 },
  { goal: 'Write one history summary sheet', progress: 25 },
];
export const revisionReminders: RevisionReminder[] = [
  { title: 'Algebra formula review', due: 'Tonight' },
  { title: 'Biology flashcard sprint', due: 'Tomorrow' },
];
