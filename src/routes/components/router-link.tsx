import { forwardRef, HTMLAttributes, Ref } from 'react';
import { Link, LinkProps } from 'react-router-dom';

// ----------------------------------------------------------------------

interface RouterLinkProps extends HTMLAttributes<HTMLAnchorElement> {
  href: string;
}

const RouterLink = forwardRef<HTMLAnchorElement, RouterLinkProps>(
  ({ href, ...other }, ref: Ref<HTMLAnchorElement>) => (
    <Link ref={ref} to={href} {...(other as LinkProps)} />
  )
);

RouterLink.displayName = 'RouterLink';

export default RouterLink;
