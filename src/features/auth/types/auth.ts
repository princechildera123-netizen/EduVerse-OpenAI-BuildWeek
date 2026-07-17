import type { UserRole } from '../../../types/role';

export type AuthUser = { id: string; name: string; email: string; role: UserRole };
export type LoginInput = { email: string; password: string; role: UserRole };
export type AuthSession = { user: AuthUser; createdAt: string };
