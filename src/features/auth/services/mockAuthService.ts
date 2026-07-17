import type { AuthSession, LoginInput } from '../types/auth';

const STORAGE_KEY = 'eduverse-auth-session';
const roleNames = { student: 'Maya Johnson', teacher: 'Avery Rivera', parent: 'Jordan Johnson', administrator: 'Dr. Morgan Lee' } as const;

export const mockAuthService = {
  getSession(): AuthSession | null {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) as AuthSession : null;
  },
  login(input: LoginInput): AuthSession {
    const session: AuthSession = { user: { id: crypto.randomUUID(), name: roleNames[input.role], email: input.email, role: input.role }, createdAt: new Date().toISOString() };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(session));
    return session;
  },
  logout() { localStorage.removeItem(STORAGE_KEY); },
};
