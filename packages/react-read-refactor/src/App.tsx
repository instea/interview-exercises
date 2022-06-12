import { useEffect } from 'react';

import { AuthService } from './AuthService';
import { UserToolbar } from './UserToolbar';

/**
 * NOTES:
 *  - you are free to remove the types and do it
 *    in javascript
 *  - you can modify any component to class component
 *    or any other variation if you so please
 *  - you can install any libraries if you want
 */

/**
 * This application executes a simple auto-login and
 * then auto-logout after 5 seconds
 * UserToolbar should inform the user about the current
 * login status
 * Find out why the solution doesn't work and fix it
 */

const authService = new AuthService();

export default function App() {
  useEffect(() => {
    // Auto login
    authService.login({ username: 'testuser', name: 'Test User' });

    // Auto logout
    const logoutTimeout = setTimeout(() => authService.logout(), 5000);
    return () => clearTimeout(logoutTimeout);
  }, []);

  return (
    <>
      <UserToolbar authService={authService} />
    </>
  );
}
