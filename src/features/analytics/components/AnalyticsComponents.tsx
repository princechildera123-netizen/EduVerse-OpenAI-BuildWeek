import { DashboardSection, ProgressBar, SimpleList } from '../../shared-dashboard/components/DashboardPrimitives';
import type { AnalyticsInsight, SubjectPerformance } from '../types/analytics';

export function SubjectPerformanceChart({ subjects }: { subjects: SubjectPerformance[] }) {
  return <DashboardSection title="Subject performance charts"><div className="grid gap-4">{subjects.map((subject) => <div key={subject.subject}><div className="flex justify-between text-sm"><span className="font-bold text-ink">{subject.subject}</span><span className="text-brand">{subject.score}% • +{subject.trend}%</span></div><div className="mt-2 h-4 rounded-full bg-slate-100"><div className="h-full rounded-full bg-gradient-to-r from-brand to-aqua" style={{ width: `${subject.score}%` }} /></div></div>)}</div></DashboardSection>;
}

export function TrendCards({ trends }: { trends: { label: string; value: number }[] }) {
  return <DashboardSection title="Learning trends"><div className="grid gap-4">{trends.map((trend) => <ProgressBar key={trend.label} {...trend} />)}</div></DashboardSection>;
}

export function InsightCards({ insights }: { insights: AnalyticsInsight[] }) {
  const items = insights.map((insight) => ({ title: insight.title, detail: insight.detail, meta: insight.tone }));
  return <DashboardSection title="Strengths, weaknesses, and AI recommendations"><SimpleList items={items} /></DashboardSection>;
}
