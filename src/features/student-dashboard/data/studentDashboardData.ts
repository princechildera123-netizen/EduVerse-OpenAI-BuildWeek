import type { Achievement, ClassSession, DashboardStat, ExamItem, HomeworkItem, NotificationItem, ProgressMetric, QuickAction } from '../types/dashboard';

export const studentName = 'Maya Johnson';
export const dailySummary = 'You have 3 classes, 2 homework tasks, and a 25-minute focus block scheduled today.';
export const learningTwinSummary = 'Your Learning Twin sees strong momentum in biology vocabulary and recommends reviewing algebra graphing before Friday.';
export const stats: DashboardStat[] = [
  { label: 'Study streak', value: '12 days', detail: 'Best streak this term', tone: 'brand' },
  { label: 'Focus time', value: '2h 15m', detail: '35m above daily goal', tone: 'aqua' },
  { label: 'Homework done', value: '86%', detail: '6 of 7 tasks complete', tone: 'sun' },
  { label: 'Weekly growth', value: '+14%', detail: 'Across core subjects', tone: 'violet' },
];
export const progress: ProgressMetric[] = [
  { label: 'Math confidence', value: 72, helper: 'Improving after graph practice' },
  { label: 'Science mastery', value: 88, helper: 'Strong recall in ecosystems' },
  { label: 'Reading fluency', value: 79, helper: 'Keep annotation routine' },
];
export const classes: ClassSession[] = [
  { subject: 'Algebra II', time: '9:00 AM', teacher: 'Ms. Rivera', room: 'Room 204' },
  { subject: 'Biology', time: '11:15 AM', teacher: 'Dr. Chen', room: 'Lab 3' },
  { subject: 'World History', time: '1:30 PM', teacher: 'Mr. Patel', room: 'Room 118' },
];
export const homework: HomeworkItem[] = [
  { subject: 'Algebra II', title: 'Graph quadratic functions', due: 'Tonight', priority: 'High' },
  { subject: 'Biology', title: 'Ecosystem vocabulary review', due: 'Tomorrow', priority: 'Medium' },
];
export const exams: ExamItem[] = [
  { subject: 'Algebra II', date: 'Friday', readiness: 68 },
  { subject: 'Biology', date: 'Next Tuesday', readiness: 84 },
];
export const notifications: NotificationItem[] = [
  { title: 'Coach reminder', message: 'Start your algebra review before 6 PM for best retention.', time: '10m ago' },
  { title: 'Badge earned', message: 'You unlocked Consistent Scholar for a 12-day streak.', time: '1h ago' },
];
export const achievements: Achievement[] = [
  { title: 'Consistent Scholar', icon: '🔥', description: '12-day study streak' },
  { title: 'Science Spark', icon: '🧬', description: 'Top biology growth' },
  { title: 'Focus Builder', icon: '🎯', description: 'Met focus goal 4 days' },
];
export const quickActions: QuickAction[] = [
  { title: 'Ask Learning Twin', description: 'Get a personalized explanation.', href: '/learning-twin' },
  { title: 'Predict exam score', description: 'Review risk and readiness.', href: '/exam-predictor' },
  { title: 'Plan study session', description: 'Build today’s focus plan.', href: '/study-coach' },
];
