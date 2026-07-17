import { createBrowserRouter } from 'react-router-dom';
import { AppShell } from '../components/layout/AppShell';
import { AdminDashboardPage } from '../features/admin-dashboard/AdminDashboardPage';
import { AiNotesPage } from '../features/ai-notes/AiNotesPage';
import { AnalyticsPage } from '../features/analytics/AnalyticsPage';
import { CareerAdvisorPage } from '../features/career-advisor/CareerAdvisorPage';
import { ProtectedRoute } from '../features/auth/components/ProtectedRoute';
import { UnauthorizedPage } from '../features/auth/components/UnauthorizedPage';
import { ExamPredictorPage } from '../features/exam-predictor/ExamPredictorPage';
import { LearningTwinPage } from '../features/learning-twin/LearningTwinPage';
import { ParentDashboardPage } from '../features/parent-dashboard/ParentDashboardPage';
import { StudentDashboardPage } from '../features/student-dashboard/StudentDashboardPage';
import { StudyCoachPage } from '../features/study-coach/StudyCoachPage';
import { StudyPlannerPage } from '../features/study-planner/StudyPlannerPage';
import { TeacherDashboardPage } from '../features/teacher-dashboard/TeacherDashboardPage';
import { LandingPage } from '../pages/LandingPage';
import { LoginPage } from '../pages/LoginPage';
import { RoleSelectionPage } from '../pages/RoleSelectionPage';
import { SignupPage } from '../pages/SignupPage';

export const router = createBrowserRouter([
  {
    element: <AppShell />,
    children: [
      { index: true, element: <LandingPage /> },
      { path: 'login', element: <LoginPage /> },
      { path: 'signup', element: <SignupPage /> },
      { path: 'roles', element: <RoleSelectionPage /> },
      { path: 'unauthorized', element: <UnauthorizedPage /> },
      {
        element: <ProtectedRoute allowedRoles={['student']} />,
        children: [
          { path: 'dashboard', element: <StudentDashboardPage /> },
          { path: 'learning-twin', element: <LearningTwinPage /> },
          { path: 'exam-predictor', element: <ExamPredictorPage /> },
          { path: 'study-coach', element: <StudyCoachPage /> },
          { path: 'career-advisor', element: <CareerAdvisorPage /> },
          { path: 'study-planner', element: <StudyPlannerPage /> },
          { path: 'ai-notes', element: <AiNotesPage /> },
          { path: 'analytics', element: <AnalyticsPage /> },
        ],
      },
      { element: <ProtectedRoute allowedRoles={['teacher']} />, children: [{ path: 'teacher-dashboard', element: <TeacherDashboardPage /> }] },
      { element: <ProtectedRoute allowedRoles={['parent']} />, children: [{ path: 'parent-dashboard', element: <ParentDashboardPage /> }] },
      { element: <ProtectedRoute allowedRoles={['administrator']} />, children: [{ path: 'admin-dashboard', element: <AdminDashboardPage /> }] },
    ],
  },
]);
