import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { TextInput } from '../components/ui/TextInput';

export function SignupPage() {
  return (
    <div className="grid min-h-[calc(100vh-7rem)] place-items-center py-10">
      <Card className="w-full max-w-lg">
        <p className="text-sm font-semibold text-brand">Start your journey</p>
        <h1 className="mt-2 text-3xl font-black text-ink">Create your EduVerse AI account</h1>
        <form className="mt-8 grid gap-5" aria-label="Sign up form">
          <TextInput id="name" label="Full name" type="text" autoComplete="name" placeholder="Alex Morgan" required />
          <TextInput id="signup-email" label="Email address" type="email" autoComplete="email" placeholder="you@school.edu" required />
          <TextInput id="signup-password" label="Password" type="password" autoComplete="new-password" placeholder="Create a secure password" required />
          <Button type="submit" className="w-full">Continue</Button>
        </form>
        <p className="mt-6 text-center text-sm text-muted">Already have an account? <Link className="font-semibold text-brand hover:text-brand-dark" to="/login">Log in</Link></p>
      </Card>
    </div>
  );
}
