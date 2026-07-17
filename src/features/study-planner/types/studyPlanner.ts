export type PlannerSubject = { id: string; name: string; examDate: string; availableMinutes: number };
export type StudyTask = { id: string; day: string; subject: string; title: string; minutes: number; completed: boolean };
export type WeeklyGoal = { goal: string; progress: number };
export type RevisionReminder = { title: string; due: string };
