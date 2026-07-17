import { useMemo, useState, type ReactNode } from 'react';
import { mockAuthService } from '../services/mockAuthService';
import type { AuthSession } from '../types/auth';
import { AuthContext, type AuthContextValue } from './authContextValue';

export function AuthProvider({ children }: { children: ReactNode }) {
  const [session, setSession] = useState<AuthSession | null>(() => mockAuthService.getSession());
  const value = useMemo<AuthContextValue>(() => ({
    user: session?.user ?? null,
    isAuthenticated: Boolean(session?.user),
    login(input) { setSession(mockAuthService.login(input)); },
    logout() { mockAuthService.logout(); setSession(null); },
  }), [session]);
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
