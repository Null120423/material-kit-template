import { alpha, Button, ButtonProps as MuiButtonProps } from '@mui/material';
import { FC, ReactNode } from 'react';

interface CustomButtonProps extends MuiButtonProps {
  children: ReactNode;
}

const ButtonPrimary: FC<CustomButtonProps> = ({ children, ...props }) => {
  return (
    <Button
      onClick={props?.disabled ? () => {} : props?.onClick}
      {...props}
      sx={{
        color: '#1877F2',
        background: alpha('#1877F2', 0.2),
        pl: 2,
        pr: 2,
        textTransform: 'Capitalize',
        fontWeight: 400,
        '&:hover': {
          background: alpha('#1877F2', 0.3),
        },
      }}
    >
      {children}
    </Button>
  );
};

const ButtonOutlined: FC<CustomButtonProps> = ({ children, ...props }) => {
  return (
    <Button
      onClick={props?.disabled ? () => {} : props?.onClick}
      {...props}
      sx={{
        color: '#1877F2',
        border: '1px solid',
        borderColor: alpha('#1877F2', 0.2),
        pl: 2,
        pr: 2,
        textTransform: 'Capitalize',
        fontWeight: 400,
        '&:hover': {
          borderColor: alpha('#1877F2', 0.3),
        },
      }}
    >
      {children}
    </Button>
  );
};

export { ButtonOutlined, ButtonPrimary };
