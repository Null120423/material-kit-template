import { Icon } from '@iconify/react';
import PropTypes from 'prop-types';
import { forwardRef } from 'react';

import Box from '@mui/material/Box';

// ----------------------------------------------------------------------
type Props = {
  icon: string;
  width?: number;
  sx?: object;
  color?: string;
};
const Iconify = forwardRef(
  ({ icon, width = 20, sx, color, ...other }: Props, ref) => (
    <Box
      ref={ref}
      component={Icon}
      className="component-iconify"
      icon={icon}
      sx={{ width, height: width, color, ...sx }}
      {...other}
    />
  )
);

Iconify.propTypes = {
  icon: PropTypes.string.isRequired,
  sx: PropTypes.object,
  width: PropTypes.number,
};

export default Iconify;
