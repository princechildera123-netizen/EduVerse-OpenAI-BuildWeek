import { ButtonLink } from '../../../components/ui/Button';
import { Card } from '../../../components/ui/Card';

export function UnauthorizedPage() {
  return <div className="grid min-h-[calc(100vh-7rem)] place-items-center py-10"><Card className="max-w-md text-center"><p className="text-sm font-semibold text-brand">Protected route</p><h1 className="mt-2 text-3xl font-black text-ink">This area is not available for your role.</h1><p className="mt-3 text-muted">Choose the dashboard that matches your EduVerse AI role.</p><div className="mt-6"><ButtonLink to="/roles">Back to roles</ButtonLink></div></Card></div>;
}
