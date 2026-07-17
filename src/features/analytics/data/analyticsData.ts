import type { AnalyticsInsight, SubjectPerformance } from '../types/analytics';

export const subjectPerformance: SubjectPerformance[] = [
  { subject: 'Algebra II', score: 78, trend: 8 },
  { subject: 'Biology', score: 89, trend: 12 },
  { subject: 'World History', score: 82, trend: 5 },
  { subject: 'English', score: 85, trend: 4 },
];
export const learningTrends = [{ label: 'Focus consistency', value: 76 }, { label: 'Quiz readiness', value: 82 }, { label: 'Revision depth', value: 68 }];
export const analyticsInsights: AnalyticsInsight[] = [
  { title: 'Science vocabulary', detail: 'Strong recall and steady practice patterns.', tone: 'strength' },
  { title: 'Quadratic graphing', detail: 'Accuracy dips when problems include transformations.', tone: 'weakness' },
  { title: 'AI recommendation', detail: 'Use two short graphing drills before each long algebra session.', tone: 'recommendation' },
];
