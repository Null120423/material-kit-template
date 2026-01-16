import { useTheme } from '@emotion/react';
import type { Theme } from '@mui/material';
import { Box, CircularProgress, alpha } from '@mui/material';

const LoadingView = () => {
  const theme = useTheme() as Theme;

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backdropFilter: 'blur(6px)',
        background: alpha(theme.palette.primary.main, 0.02),
      }}
    >
      <CircularProgress size={32} color="primary" />
    </Box>
  );
};

export default LoadingView;
