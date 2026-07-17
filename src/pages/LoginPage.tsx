import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { TextInput } from '../components/ui/TextInput';

export function LoginPage() {
  return (
    <div className="grid min-h-[calc(100vh-7rem)] place-items-center py-10">
      <Card className="w-full max-w-md">
        <p className="text-sm font-semibold text-brand">Welcome back</p>
        <h1 className="mt-2 text-3xl font-black text-ink">Log in to EduVerse AI</h1>
        <form className="mt-8 grid gap-5" aria-label="Log in form">
          <TextInput id="email" label="Email address" type="email" autoComplete="email" placeholder="you@school.edu" required />
          <TextInput id="password" label="Password" type="password" autoComplete="current-password" placeholder="Enter your password" required />
          <Button type="submit" className="w-full">Log in</Button>
        </form>
        <p className="mt-6 text-center text-sm text-muted">New to EduVerse AI? <Link className="font-semibold text-brand hover:text-brand-dark" to="/signup">Create an account</Link></p>
      </Card>
    </div>
  );
}
