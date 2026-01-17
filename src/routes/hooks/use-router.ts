import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

import { logger } from '@/utils/logger';

// ----------------------------------------------------------------------

interface Router {
  back: () => void;
  forward: () => void;
  reload: () => void;
  push: (href: string) => void;
  replace: (href: string) => void;
}

export function useRouter(): Router {
  const navigate = useNavigate();

  const router = useMemo(
    (): Router => ({
      back: () => {
        logger.info('Navigation: Going back');
        navigate(-1);
      },
      forward: () => {
        logger.info('Navigation: Going forward');
        navigate(1);
      },
      reload: () => {
        logger.info('Page: Reloading');
        window.location.reload();
      },
      push: (href: string) => {
        logger.info('Navigation: Navigating to route', { href });
        navigate(href);
      },
      replace: (href: string) => {
        logger.info('Navigation: Replacing route', { href });
        navigate(href, { replace: true });
      },
    }),
    [navigate]
  );

  return router;
}
