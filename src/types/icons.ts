// Icon component prop types
import { SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGElement> {
  width?: number | string;
  height?: number | string;
  color?: string;
  size?: number | string;
}

export default IconProps;
