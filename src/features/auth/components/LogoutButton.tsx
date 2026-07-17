import { useNavigate } from 'react-router-dom';
import { Button } from '../../../components/ui/Button';
import { useAuth } from '../hooks/useAuth';

export function LogoutButton() {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  if (!isAuthenticated) return null;
  return <Button type="button" variant="ghost" className="hidden sm:inline-flex" onClick={() => { logout(); navigate('/login'); }}>Log out</Button>;
}
