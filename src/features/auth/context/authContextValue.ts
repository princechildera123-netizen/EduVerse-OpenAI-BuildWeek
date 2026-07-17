import { createContext } from 'react';
import type { AuthUser, LoginInput } from '../types/auth';

type AuthContextValue = { user: AuthUser | null; isAuthenticated: boolean; login: (input: LoginInput) => void; logout: () => void };

export const AuthContext = createContext<AuthContextValue | null>(null);
export type { AuthContextValue };
