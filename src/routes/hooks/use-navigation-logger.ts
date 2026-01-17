import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { logger } from '@/utils/logger';

// Store the previous pathname to detect navigation direction
let previousPathname: string | null = null;

/**
 * Hook to log navigation events
 * Logs when user navigates to a new route
 */
export function useNavigationLogger(): void {
  const location = useLocation();

  useEffect(() => {
    if (previousPathname !== null && previousPathname !== location.pathname) {
      logger.info('Route changed', {
        from: previousPathname,
        to: location.pathname,
        search: location.search,
      });
    }
    previousPathname = location.pathname;
  }, [location.pathname, location.search]);
}

/**
 * Get the current navigation history
 */
export function getNavigationLogs() {
  return logger.getLogs();
}
