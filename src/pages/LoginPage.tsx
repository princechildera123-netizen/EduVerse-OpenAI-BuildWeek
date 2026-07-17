import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { TextInput } from '../components/ui/TextInput';
import { useAuth } from '../features/auth/hooks/useAuth';
import type { UserRole } from '../types/role';

const roleRedirects: Record<UserRole, string> = { student: '/dashboard', teacher: '/teacher-dashboard', parent: '/parent-dashboard', administrator: '/admin-dashboard' };
const roles: { value: UserRole; label: string }[] = [
  { value: 'student', label: 'Student' }, { value: 'teacher', label: 'Teacher' }, { value: 'parent', label: 'Parent' }, { value: 'administrator', label: 'School Administrator' },
];

export function LoginPage() {
  const [role, setRole] = useState<UserRole>('student');
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = (location.state as { from?: { pathname?: string } } | null)?.from?.pathname;
  return (
    <div className="grid min-h-[calc(100vh-7rem)] place-items-center py-10">
      <Card className="w-full max-w-md">
        <p className="text-sm font-semibold text-brand">Welcome back</p>
        <h1 className="mt-2 text-3xl font-black text-ink">Log in to EduVerse AI</h1>
        <form className="mt-8 grid gap-5" aria-label="Log in form" onSubmit={(event) => { event.preventDefault(); const form = new FormData(event.currentTarget); login({ email: String(form.get('email')), password: String(form.get('password')), role }); navigate(from ?? roleRedirects[role]); }}>
          <TextInput id="email" name="email" label="Email address" type="email" autoComplete="email" placeholder="you@school.edu" required />
          <TextInput id="password" name="password" label="Password" type="password" autoComplete="current-password" placeholder="Enter your password" required />
          <label className="grid gap-2 text-sm font-medium text-ink" htmlFor="role">Role<select id="role" className="focus-ring min-h-12 rounded-2xl border border-slate-200 bg-white px-4 text-base text-ink shadow-sm" value={role} onChange={(event) => setRole(event.target.value as UserRole)}>{roles.map((item) => <option key={item.value} value={item.value}>{item.label}</option>)}</select></label>
          <Button type="submit" className="w-full">Log in</Button>
        </form>
        <p className="mt-6 text-center text-sm text-muted">New to EduVerse AI? <Link className="font-semibold text-brand hover:text-brand-dark" to="/signup">Create an account</Link></p>
      </Card>
    </div>
  );
}
