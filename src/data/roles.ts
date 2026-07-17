import type { UserRole } from '../types/role';

export type RoleOption = {
  id: UserRole;
  title: string;
  description: string;
  accent: string;
};

export const roles: RoleOption[] = [
  { id: 'student', title: 'Student', description: 'Explore guided lessons, learning goals, and study momentum.', accent: 'from-brand to-aqua' },
  { id: 'teacher', title: 'Teacher', description: 'Plan instruction, support learners, and organize classroom workflows.', accent: 'from-aqua to-emerald-400' },
  { id: 'parent', title: 'Parent', description: 'Stay connected to progress, milestones, and learning routines.', accent: 'from-sun to-orange-400' },
  { id: 'administrator', title: 'School Administrator', description: 'Coordinate school-wide learning experiences and community visibility.', accent: 'from-violet-500 to-brand' },
];
