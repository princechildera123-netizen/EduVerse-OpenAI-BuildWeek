import type { Flashcard, PlannerItem, QuizPrompt } from '../types/studyCoach';

export const dailySchedule: PlannerItem[] = [
  { title: 'Algebra warmup', time: '4:00 PM', detail: 'Graph two quadratic examples.' },
  { title: 'Biology recall', time: '4:30 PM', detail: 'Review ecosystem vocabulary flashcards.' },
  { title: 'Reflection', time: '5:00 PM', detail: 'Write one thing that still feels unclear.' },
];
export const weeklyRevision: PlannerItem[] = [
  { title: 'Monday', time: '25m', detail: 'Algebra graphing practice' },
  { title: 'Wednesday', time: '30m', detail: 'Biology diagrams and recall' },
  { title: 'Friday', time: '20m', detail: 'Mixed review and confidence check' },
];
export const homeworkPlan: PlannerItem[] = [
  { title: 'Quadratic functions', time: 'Tonight', detail: 'Finish problems 1–12.' },
  { title: 'Ecosystem vocabulary', time: 'Tomorrow', detail: 'Complete active recall set.' },
];
export const flashcards: Flashcard[] = [
  { front: 'Vertex form', back: 'y = a(x - h)^2 + k' },
  { front: 'Producer', back: 'Organism that creates energy-rich food.' },
];
export const quizPrompts: QuizPrompt[] = [
  { question: 'What changes when a is negative in vertex form?', skill: 'Quadratic graphs' },
  { question: 'How does energy move through a food web?', skill: 'Ecosystems' },
];
