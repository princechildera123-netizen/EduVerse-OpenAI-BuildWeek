import { createBrowserRouter } from 'react-router-dom';
import { AppShell } from '../components/layout/AppShell';
import { LandingPage } from '../pages/LandingPage';
import { LoginPage } from '../pages/LoginPage';
import { RoleSelectionPage } from '../pages/RoleSelectionPage';
import { SignupPage } from '../pages/SignupPage';
import { StudentDashboardPage } from '../features/student-dashboard/StudentDashboardPage';
import { LearningTwinPage } from '../features/learning-twin/LearningTwinPage';
import { ExamPredictorPage } from '../features/exam-predictor/ExamPredictorPage';
import { StudyCoachPage } from '../features/study-coach/StudyCoachPage';

export const router = createBrowserRouter([
  {
    element: <AppShell />,
    children: [
      { index: true, element: <LandingPage /> },
      { path: 'login', element: <LoginPage /> },
      { path: 'signup', element: <SignupPage /> },
      { path: 'roles', element: <RoleSelectionPage /> },
      { path: 'dashboard', element: <StudentDashboardPage /> },
      { path: 'learning-twin', element: <LearningTwinPage /> },
      { path: 'exam-predictor', element: <ExamPredictorPage /> },
      { path: 'study-coach', element: <StudyCoachPage /> },
    ],
  },
]);
