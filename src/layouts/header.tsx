import PropTypes from 'prop-types';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import type { SxProps, Theme } from '@mui/material/styles';
import { useTheme } from '@mui/material/styles';

import { useResponsive } from '@/hooks/use-responsive';

import { bgBlur } from '@/theme/css';

import Iconify from '@/components/iconify';
import { HEADER, NAV } from './config-layout';

// ----------------------------------------------------------------------

type Props = {
  onOpenNav: () => void;
};
export default function Header({ onOpenNav }: Props) {
  const theme = useTheme();

  const lgUp = useResponsive('up', 'lg');

  const renderContent = (
    <>
      {!lgUp && (
        <IconButton onClick={onOpenNav} sx={{ mr: 1 }}>
          <Iconify icon="eva:menu-2-fill" />
        </IconButton>
      )}

      <Box sx={{ flexGrow: 1 }} />

      <Stack direction="row" alignItems="center" spacing={1}>
        HEllo
      </Stack>
    </>
  );

  return (
    <AppBar
      sx={
        {
          boxShadow: 'none',
          height: HEADER.H_MOBILE,
          zIndex: theme.zIndex.appBar + 1,
          ...bgBlur({
            color: theme.palette.background.default,
          }),
          transition: theme.transitions.create(['height'], {
            duration: theme.transitions.duration.shorter,
          }),
          borderBottom: `dashed 1px ${theme.palette.divider}`,
          ...(lgUp && {
            width: `calc(100% - ${NAV.WIDTH + 1}px)`,
            height: HEADER.H_DESKTOP,
          }),
        } as SxProps<Theme>
      }
    >
      <Toolbar
        sx={{
          height: 1,
          px: { lg: 5 },
        }}
      >
        {renderContent}
      </Toolbar>
    </AppBar>
  );
}

Header.propTypes = {
  onOpenNav: PropTypes.func,
};
