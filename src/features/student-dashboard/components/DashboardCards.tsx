import { Link } from 'react-router-dom';
import type { Achievement, ClassSession, DashboardStat, ExamItem, HomeworkItem, NotificationItem, ProgressMetric, QuickAction } from '../types/dashboard';

const toneMap: Record<DashboardStat['tone'], string> = {
  brand: 'from-brand to-violet-500', aqua: 'from-aqua to-cyan-400', sun: 'from-sun to-orange-400', violet: 'from-violet-500 to-fuchsia-500',
};

export function StatCard({ stat }: { stat: DashboardStat }) {
  return <article className="rounded-3xl bg-white/85 p-5 shadow-xl shadow-slate-200/60"><div className={`mb-4 h-2 rounded-full bg-gradient-to-r ${toneMap[stat.tone]}`} /><p className="text-sm font-semibold text-muted">{stat.label}</p><strong className="mt-2 block text-3xl text-ink">{stat.value}</strong><p className="mt-2 text-sm text-muted">{stat.detail}</p></article>;
}

export function ProgressCard({ metric }: { metric: ProgressMetric }) {
  return <article className="rounded-3xl border border-slate-100 bg-white p-5"><div className="flex items-center justify-between gap-4"><h3 className="font-bold text-ink">{metric.label}</h3><span className="text-sm font-bold text-brand">{metric.value}%</span></div><div className="mt-4 h-3 rounded-full bg-slate-100"><div className="h-full rounded-full bg-gradient-to-r from-brand to-aqua" style={{ width: `${metric.value}%` }} /></div><p className="mt-3 text-sm text-muted">{metric.helper}</p></article>;
}

export function ClassCard({ item }: { item: ClassSession }) {
  return <article className="rounded-2xl bg-slate-50 p-4"><p className="font-bold text-ink">{item.subject}</p><p className="mt-1 text-sm text-muted">{item.time} • {item.room}</p><p className="mt-1 text-sm text-muted">{item.teacher}</p></article>;
}

export function HomeworkCard({ item }: { item: HomeworkItem }) {
  return <article className="rounded-2xl border border-slate-100 bg-white p-4"><div className="flex items-start justify-between gap-3"><div><p className="text-xs font-bold uppercase tracking-wide text-brand">{item.subject}</p><h3 className="mt-1 font-bold text-ink">{item.title}</h3><p className="mt-1 text-sm text-muted">Due {item.due}</p></div><span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-muted">{item.priority}</span></div></article>;
}

export function ExamCard({ item }: { item: ExamItem }) {
  return <article className="rounded-2xl bg-white p-4 shadow-sm"><div className="flex items-center justify-between"><div><h3 className="font-bold text-ink">{item.subject}</h3><p className="text-sm text-muted">{item.date}</p></div><strong className="text-brand">{item.readiness}%</strong></div><div className="mt-3 h-2 rounded-full bg-slate-100"><div className="h-full rounded-full bg-brand" style={{ width: `${item.readiness}%` }} /></div></article>;
}

export function NotificationCard({ item }: { item: NotificationItem }) {
  return <article className="rounded-2xl border border-slate-100 bg-white p-4"><p className="font-bold text-ink">{item.title}</p><p className="mt-1 text-sm text-muted">{item.message}</p><p className="mt-2 text-xs font-semibold text-brand">{item.time}</p></article>;
}

export function AchievementBadge({ item }: { item: Achievement }) {
  return <article className="rounded-2xl bg-white p-4 text-center shadow-sm"><span className="text-3xl" aria-hidden="true">{item.icon}</span><h3 className="mt-2 font-bold text-ink">{item.title}</h3><p className="mt-1 text-xs text-muted">{item.description}</p></article>;
}

export function QuickActionCard({ item }: { item: QuickAction }) {
  return <Link to={item.href} className="focus-ring block rounded-2xl border border-brand/15 bg-brand/5 p-4 transition hover:-translate-y-0.5 hover:bg-brand/10"><h3 className="font-bold text-brand">{item.title}</h3><p className="mt-1 text-sm text-muted">{item.description}</p></Link>;
}
