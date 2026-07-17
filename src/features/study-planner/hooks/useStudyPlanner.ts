import { useMemo, useState } from 'react';
import { plannerSubjects, revisionReminders, studyTasks, weeklyGoals } from '../data/studyPlannerData';

export function useStudyPlanner() {
  const [selectedSubjectId, setSelectedSubjectId] = useState(plannerSubjects[0].id);
  const [completedTaskIds, setCompletedTaskIds] = useState(() => new Set(studyTasks.filter((task) => task.completed).map((task) => task.id)));
  const selectedSubject = useMemo(() => plannerSubjects.find((subject) => subject.id === selectedSubjectId) ?? plannerSubjects[0], [selectedSubjectId]);
  const tasks = useMemo(() => studyTasks.map((task) => ({ ...task, completed: completedTaskIds.has(task.id) })), [completedTaskIds]);
  function toggleTask(id: string) {
    setCompletedTaskIds((current) => { const next = new Set(current); if (next.has(id)) next.delete(id); else next.add(id); return next; });
  }
  return { subjects: plannerSubjects, selectedSubject, selectedSubjectId, setSelectedSubjectId, tasks, weeklyGoals, revisionReminders, toggleTask };
}
