import { AuthService } from './AuthService';

type UserToolbarProps = {
  authService: AuthService;
};

export function UserToolbar({ authService }: UserToolbarProps) {
  const user = authService.getUser();
  return (
    <div>Logged in user: {user ? `${user.username} (${user.name})` : '-'}</div>
  );
}
