export type DashboardStat = { label: string; value: string; detail: string; tone: 'brand' | 'aqua' | 'sun' | 'violet' };
export type ProgressMetric = { label: string; value: number; helper: string };
export type ClassSession = { subject: string; time: string; teacher: string; room: string };
export type HomeworkItem = { subject: string; title: string; due: string; priority: 'Low' | 'Medium' | 'High' };
export type ExamItem = { subject: string; date: string; readiness: number };
export type NotificationItem = { title: string; message: string; time: string };
export type Achievement = { title: string; icon: string; description: string };
export type QuickAction = { title: string; description: string; href: string };
