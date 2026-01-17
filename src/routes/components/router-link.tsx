import { forwardRef, type HTMLAttributes, type Ref } from 'react';
import { Link, type LinkProps } from 'react-router-dom';

import { logger } from '@/utils/logger';

// ----------------------------------------------------------------------

interface RouterLinkProps extends HTMLAttributes<HTMLAnchorElement> {
  href: string;
}

const RouterLink = forwardRef<HTMLAnchorElement, RouterLinkProps>(
  ({ href, children, onClick, ...other }, ref: Ref<HTMLAnchorElement>) => {
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      logger.info('Navigation: Link clicked', { href });
      onClick?.(e);
    };

    const { to, ...restOther } = other as LinkProps;

    return (
      <Link ref={ref} to={href} onClick={handleClick} {...restOther}>
        {children}
      </Link>
    );
  }
);

RouterLink.displayName = 'RouterLink';

export default RouterLink;
