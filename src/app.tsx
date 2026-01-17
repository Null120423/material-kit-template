// ----------------------------------------------------------------------

import { useNavigationLogger } from '@/routes/hooks';
import { logger } from '@/utils/logger';
import { useScrollToTop } from './hooks/use-scroll-to-top';
import { AuthRouter, PrivateRouter } from './routes/sections';
import ThemeProvider from './theme';

const App = () => {
  useScrollToTop();
  useNavigationLogger();

  const currentUser = null; // TODO: get current user from auth context or state

  // Log app initialization
  logger.info('App initialized');

  return (
    <ThemeProvider>
      {currentUser && <PrivateRouter />}
      {!currentUser && <AuthRouter />}
    </ThemeProvider>
  );
};

export default App;
