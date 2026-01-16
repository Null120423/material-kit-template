// Theme type augmentation for Material-UI custom properties
import { SxProps, Theme } from '@mui/material';
import '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Theme {
    customShadows: {
      xs?: string;
      sm?: string;
      md?: string;
      lg?: string;
      xl?: string;
      z1?: string;
      z8?: string;
      z12?: string;
      z16?: string;
      z20?: string;
      z24?: string;
      primary?: string;
      secondary?: string;
      info?: string;
      success?: string;
      warning?: string;
      error?: string;
      [key: string]: string | undefined;
    };
  }

  interface ThemeOptions {
    customShadows?: {
      xs?: string;
      sm?: string;
      md?: string;
      lg?: string;
      xl?: string;
      z1?: string;
      z8?: string;
      z12?: string;
      z16?: string;
      z20?: string;
      z24?: string;
      primary?: string;
      secondary?: string;
      info?: string;
      success?: string;
      warning?: string;
      error?: string;
      [key: string]: string | undefined;
    };
  }
}

declare module '@mui/material' {
  interface PaletteColor {
    darker?: string;
  }

  interface SimplePaletteColorOptions {
    darker?: string;
  }
}

export type SxPropsType = SxProps<Theme>;

export default SxPropsType;
